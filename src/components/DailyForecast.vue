<script setup lang="ts">


import type { ILocation } from '../utils/apiGeo';
import { dailyForcastData, type TDailyForcast, type TUnit } from '../utils/apiMeteo';
import DayForecast from './DayForecast.vue';
import { type Ref, ref, watchEffect } from 'vue';
import EmptyCard from './EmptyCard.vue';

const props = defineProps<{location : ILocation, unit : TUnit, loading : boolean}>()
const dailyForecastRef : Ref<TDailyForcast> = ref({
    temperature_2m_min : [],
    temperature_2m_max : [],
    weather_code : []
})



watchEffect(async()=>{
    if(props.location.latitude && !props.loading ){
        const forescast = await dailyForcastData(props.location.latitude as number,props.location.longitude as number, props.unit)
        dailyForecastRef.value = forescast.data.daily
    }
})

</script>

<template>
    <div class="w-full flex gap-4 flex-col">
        <span class="text-white font-semibold">Daily forecast</span>
        <div class="w-full flex justify-between max-md:flex-wrap max-md:gap-4 max-md:justify-normal ">
            <EmptyCard v-if="loading" v-for="n in 7"/>
            <DayForecast v-if="!loading" v-for="(day, index) in dailyForecastRef.time" 
            :day="day" 
            :code="dailyForecastRef.weather_code[index] as number" 
            :minTemperature="dailyForecastRef.temperature_2m_min[index] as number" 
            :maxTemperature="dailyForecastRef.temperature_2m_max[index] as number" 
            />
        </div>
    </div>
</template>

