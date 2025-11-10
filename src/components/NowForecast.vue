<script setup lang="ts">
import { ref, watchEffect, type Ref } from 'vue';
import type { ILocation } from '../utils/apiGeo';
import { nowForcastData, type TForcast, type TUnit } from '../utils/apiMeteo';
import DailyForecast from './DailyForecast.vue';
import DetailForecast from './DetailForecast.vue';
import HourlyForecast from './HourlyForecast.vue';
import Today from './Today.vue'

const props = defineProps<{location : ILocation, unit : TUnit}>()
const loading = ref(true)
const nowForecastRef : Ref<TForcast> = ref({})

watchEffect(async()=>{
    if(props.location.latitude){
        const forescast = await nowForcastData(props.location.latitude as number,props.location.longitude as number, props.unit)
        nowForecastRef.value = forescast.data.current
        loading.value = false
    }
})



</script>

<template>
    <section class="px-14 max-md:px-5 py-2 flex gap-5  justify-between max-md:flex-col max-md:justify-start">
        <div class="w-full flex flex-col gap-6">
            <Today :loading = "loading" :location="location" :date="'ks'" :temp="nowForecastRef.temperature_2m as number" />
            <DetailForecast :humidity="nowForecastRef.relative_humidity_2m" :wind="nowForecastRef.wind_speed_10m" :precipitation="nowForecastRef.precipitation" :temperature="nowForecastRef.apparent_temperature" :unit="unit" />
            <DailyForecast/>
        </div>
        <HourlyForecast/>
    </section>
</template>

