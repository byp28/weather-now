<script setup lang="ts">


import type { ILocation } from '../utils/apiGeo';
import { dailyForcastData, type TDailyForcast, type TUnit } from '../utils/apiMeteo';
import DayForecast from './DayForecast.vue';
import { type Ref, ref, watchEffect } from 'vue';

const props = defineProps<{location : ILocation, unit : TUnit}>()
const dailyForecastRef : Ref<TDailyForcast> = ref({})

watchEffect(async()=>{
    if(props.location.latitude){
        const forescast = await dailyForcastData(props.location.latitude as number,props.location.longitude as number, props.unit)
        dailyForecastRef.value = forescast.data.daily
    }
})

</script>

<template>
    <div class="w-full flex gap-4 flex-col">
        <span class="text-white font-semibold">Daily forecast</span>
        <div class="w-full flex justify-between max-md:flex-wrap max-md:gap-4 max-md:justify-normal ">
            
            <DayForecast v-for="(day, index) in dailyForecastRef.time" :day="day" :minTemperature=dailyForecastRef.temperature_2m_min?[index]  :maxTemperature="dailyForecastRef.temperature_2m_min?[index]"/>
        </div>
    </div>
</template>

