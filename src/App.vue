<script setup lang="ts">
import { onMounted, ref } from 'vue';
import NowForecast from './components/NowForecast.vue';
import SearchPlace from './components/SearchPlace.vue';
import Header from './layouts/Header.vue';
import type { ILocation } from './utils/apiGeo';
import type { Ref } from 'vue'


const myLocation : Ref<ILocation> = ref({})

const getMyPosition = ()=>{
  navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => console.log(position.coords.longitude));
}

const setMyLocation = (location : ILocation)=>{
    myLocation.value = location;
    alert(`${myLocation.value.name}, ${myLocation.value.country}`)
}

onMounted(()=>{
  getMyPosition()
})

</script>

<template>
  <main class="bg-[#02012b] flex flex-col gap-5 min-h-screen">
    <Header unit="g" />
    <span class="w-full text-5xl px-2 text-white text-center">How's the sky loocking today?</span>
    <SearchPlace :setLocation="setMyLocation"/>
    <NowForecast/>
  </main>
</template>


