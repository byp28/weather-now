<script setup lang="ts">
import DayForecast from './DayForecast.vue';


</script>

<template>
    <div class="w-full flex gap-4 flex-col">
        <span class="text-white font-semibold">Daily forecast</span>
        <div class="w-full flex justify-between">
            <DayForecast  day="Thu" temperature="10" :minTemperature=14 :maxTemperature=20 />
            <DayForecast  day="Thu" temperature="10" :minTemperature=14 :maxTemperature=20 />
            <DayForecast  day="Thu" temperature="10" :minTemperature=14 :maxTemperature=20 />
            <DayForecast  day="Thu" temperature="10" :minTemperature=14 :maxTemperature=20 />
            <DayForecast  day="Thu" temperature="10" :minTemperature=14 :maxTemperature=20 />
            <DayForecast  day="Thu" temperature="10" :minTemperature=14 :maxTemperature=20 />
            <DayForecast  day="Thu" temperature="10" :minTemperature=14 :maxTemperature=20 />
        </div>
    </div>
</template>

