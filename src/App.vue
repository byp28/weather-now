<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NowForecast from './components/NowForecast.vue';
import SearchPlace from './components/SearchPlace.vue';
import Header from './layouts/Header.vue';
import { checkApiAccessGeo, type ILocation } from './utils/apiGeo';
import type { Ref } from 'vue'
import { checkApiAccessReverseGeo, reverseLocation, type IReverseLocation } from './utils/apiReverseGeo';
import { checkApiAccessMeteo, type TUnit } from './utils/apiMeteo';
import NoSearch from './layouts/NoSearch.vue';
import ApiError from './layouts/ApiError.vue';



const myLocation : Ref<ILocation> = ref({})
const InitialLocation : Ref<ILocation> = ref({})
const loading  = ref(true)
const noResult = ref(true)
const ApiAcess = ref(false)

const Unit : Ref<TUnit> = ref({
  speed : "kmh",
  precipitation : "mm",
  temparature : "celsius",
  setSpeed(newValue : string){
    this.speed= newValue
  },
  setPrecipitation(newValue : string){
    this.precipitation = newValue
  },
  setTemperature(newValue : string){
    this.temparature = newValue
  },
  swicthToImperial(){
    this.speed = "mph"
    this.precipitation = "inch"
    this.temparature = "fahrenheit"
  },
  swicthToMetric(){
    this.speed = "kmh"
    this.precipitation = "mm"
    this.temparature = "celsius"
  },
})


const reverseMyLocation : Ref<IReverseLocation> = ref({})

const checkApi = async ()=>{
  
  const Geo = await checkApiAccessGeo()
  const reverseGeo = await checkApiAccessReverseGeo()
  const AccessMeteo = await checkApiAccessMeteo()

  return Geo && reverseGeo && AccessMeteo
}

const getMyPosition = async (): Promise<[number, number]> =>{
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        noResult.value = false;
        resolve([position.coords.longitude, position.coords.latitude]);
      },
      (error) => reject(error)
    );
  });
}

const setMyLocation = (location : ILocation)=>{
    myLocation.value = location;
    noResult.value = false
    loading.value=false;
}

onMounted(async ()=>{
  const check = await checkApi()
  if(check){
    ApiAcess.value = true
  }
  try {
    const [longitude, latitude] = await getMyPosition()
    const findMyLocate = await reverseLocation(latitude.toString(), longitude.toString())
    reverseMyLocation.value.address = findMyLocate.data.address
    InitialLocation.value = {
      name : reverseMyLocation.value.address?.city,
      country : reverseMyLocation.value.address?.country,
      latitude : latitude,
      longitude : longitude
    }
    myLocation.value = InitialLocation.value
    loading.value=false;
  } catch (err) {
    console.error('Failed to get position or reverse geocode', err)
  }
})

</script>

<template>
  <main class="bg-[#02012b] dm flex flex-col gap-5 min-h-screen">
    <Header :unit="Unit" />
    <span v-if="ApiAcess" class="w-full text-5xl px-2 text-white text-center bricolage">How's the sky loocking today?</span>
    <ApiError v-if="!ApiAcess"/>
    <SearchPlace v-if="ApiAcess" :setLocation="setMyLocation"/>
    <NowForecast v-if="!noResult && ApiAcess" :loadingPosition="loading" :unit = "Unit" :location="myLocation"/>
    <NoSearch   v-if="noResult && ApiAcess"/>
  </main>
</template>


