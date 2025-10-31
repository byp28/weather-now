<script setup lang="ts">
import HourForecast from './HourForecast.vue';



</script>

<template>
    <div class="w-160 bg-[#25253F] h-full p-5 rounded-lg flex gap-4 flex-col">
        <div class="w-full flex justify-between items-center">
            <span class="text-white font-semibold">Hourly Forecast</span>
            <span class="flex gap-3 items-center px-3 py-2 bg-[#3C3A5E] rounded-sm">
                <span class="text-white font-semibold">-</span>
                <img src="/assets/images/icon-dropdown.svg" alt="dropdown">
            </span>
        </div>
        <section class="w-full flex flex-col gap-4">
            <HourForecast hour="1" temperature="21"/>
            <HourForecast hour="1" temperature="21"/>
            <HourForecast hour="1" temperature="21"/>
            <HourForecast hour="1" temperature="21"/>
            <HourForecast hour="1" temperature="21"/>
            <HourForecast hour="1" temperature="21"/>
            <HourForecast hour="1" temperature="21"/>
        </section>
    </div>
</template>

