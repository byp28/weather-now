<script setup lang="ts">
import NowForecast from './components/NowForecast.vue';
import SearchPlace from './components/SearchPlace.vue';
import Header from './layouts/Header.vue';
</script>

<template>
  <main class="bg-[#02012b] flex flex-col gap-5 min-h-screen">
    <Header unit="g" />
    <span class="w-full text-5xl px-2 text-white text-center">How's the sky loocking today?</span>
    <SearchPlace/>
    <NowForecast/>
  </main>
</template>


