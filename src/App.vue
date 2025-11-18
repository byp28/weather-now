<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NowForecast from './components/NowForecast.vue';
import SearchPlace from './components/SearchPlace.vue';
import Header from './layouts/Header.vue';
import type { ILocation } from './utils/apiGeo';
import type { Ref } from 'vue'
import { reverseLocation, type IReverseLocation } from './utils/apiReverseGeo';
import { type TUnit } from './utils/apiMeteo';


const myLocation : Ref<ILocation> = ref({})
const InitialLocation : Ref<ILocation> = ref({})
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

const getMyPosition = async (): Promise<[number, number]> =>{
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        resolve([position.coords.longitude, position.coords.latitude]);
      },
      (error) => reject(error)
    );
  });
}

const setMyLocation = (location : ILocation)=>{
    myLocation.value = location;
}

onMounted(async ()=>{
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
  } catch (err) {
    console.error('Failed to get position or reverse geocode', err)
  }
})

</script>

<template>
  <main class="bg-[#02012b] dm flex flex-col gap-5 min-h-screen">
    <Header :unit="Unit" />
    <span class="w-full text-5xl px-2 text-white text-center bricolage">How's the sky loocking today?</span>
    <SearchPlace :setLocation="setMyLocation"/>
    <NowForecast :unit = "Unit" :location="myLocation"/>
  </main>
</template>


