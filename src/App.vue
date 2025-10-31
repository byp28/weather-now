<script setup lang="ts">
import DailyForecast from './components/DailyForecast.vue';
import DetailForecast from './components/DetailForecast.vue';
import HourlyForecast from './components/HourlyForecast.vue';
import Today from './components/Today.vue'
import Header from './layouts/Header.vue';
</script>

<template>
  <main class="bg-[#02012b] flex flex-col gap-5 min-h-screen">
    <Header unit="g" />
    <span class="w-full text-5xl text-white text-center">How's the sky loocking today?</span>
    <div class="w-full flex justify-center items-center gap-4 py-10">
      <div>
        <div class="bg-[#25253F] text-white p-3 rounded-lg w-115 flex gap-3 items-center">
          <img src="/assets/images/icon-search.svg" alt="search"/>
          <input placeholder="Search for a place ..."   class="w-full outline-none"/>
        </div>
      </div>
      <button class="py-3 px-5 rounded-lg bg-[#4657D9] text-white font-semibold">Search</button>
    </div>
    <section class="px-14 py-2 flex gap-5  justify-between">
      <div class="w-full flex flex-col gap-6">
        <Today/>
        <DetailForecast/>
        <DailyForecast/>
      </div>
      <HourlyForecast/>
    </section>
  </main>
</template>


