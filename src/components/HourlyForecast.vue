<script setup lang="ts">
import { ref, watchEffect, type Ref } from 'vue';
import DaysMenu from './HorlyForecast/DaysMenu.vue';
import HourForecast from './HourForecast.vue';
import type { ILocation } from '../utils/apiGeo';
import { horlyForcastData, type THorlyForcast, type TUnit } from '../utils/apiMeteo';

type DayParse = {
    day : Array<THorlyForcast>
}

const props = defineProps<{location : ILocation, unit : TUnit}>()
const horlyForecastRef : Ref<THorlyForcast> = ref({
    time : [],
    temperature_2m : [],
    precipitation : []
})
const AllDay : Ref<DayParse> = ref({
    day : [
        {
            time : [],
            temperature_2m : [],
            precipitation : []
        }
    ]
})
const hiddenSubmenu = ref(false)
//const loading = ref(true)

watchEffect(async()=>{
    if(props.location.latitude){
        const forescast = await horlyForcastData(props.location.latitude as number,props.location.longitude as number, props.unit)
        horlyForecastRef.value = forescast.data.hourly
        let count = 0;
        let dayCount = 0;
        if(horlyForecastRef.value.time?.length){
            horlyForecastRef.value.time?.map((dTime, i)=>{
                if(count===24){
                    count = 0
                    dayCount+=1
                    AllDay.value.day.push(
                        {
                            time : [],
                            temperature_2m : [],
                            precipitation : []
                        }
                    )
                }
                let temp = horlyForecastRef.value.temperature_2m[i]
                let preci = horlyForecastRef.value.precipitation[i]
                AllDay.value.day[dayCount]?.time?.push(dTime)
                
                AllDay.value.day[dayCount]?.temperature_2m?.push(temp as number)
                AllDay.value.day[dayCount]?.precipitation?.push(preci as number)
                count+=1
            })
            console.log(AllDay.value.day)
        }
        
        
    }
})

const toggleMenu = ()=>{
    hiddenSubmenu.value = !hiddenSubmenu.value
}

</script>

<template>
    <div class="w-160 max-md:w-full bg-[#25253F] h-full p-5 rounded-lg flex gap-4 flex-col">
        <div class="w-full flex justify-between items-center">
            <span class="text-white font-semibold">Hourly Forecast</span>
            <span @click.self="toggleMenu" class="flex gap-3 items-center px-3 py-2 bg-[#3C3A5E] rounded-sm relative">
                <span class="text-white font-semibold">Monday</span>
                <img src="/assets/images/icon-dropdown.svg" alt="dropdown">
                <div  v-if="hiddenSubmenu" class="absolute right-0 -bottom-80 ">
                    <DaysMenu/>
                </div>
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

