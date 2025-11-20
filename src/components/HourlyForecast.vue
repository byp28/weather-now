<script setup lang="ts">
import { ref, watchEffect, type Ref } from 'vue';
import DaysMenu from './HorlyForecast/DaysMenu.vue';
import HourForecast from './HourForecast.vue';
import type { ILocation } from '../utils/apiGeo';
import { horlyForcastData, type THorlyForcast, type TUnit } from '../utils/apiMeteo';
import EmptyList from './EmptyList.vue';

type DayParse = {
    day : Array<THorlyForcast>
}

const props = defineProps<{location : ILocation, unit : TUnit, loading : boolean}>()
const horlyForecastRef : Ref<THorlyForcast> = ref({
    time : [],
    temperature_2m : [],
    weather_code : []
})
const AllDay : Ref<DayParse> = ref({
    day : [
        {
            time : [],
            temperature_2m : [],
            weather_code : []
        }
    ]
})
const AllDate = ref([""])
const selectDay = ref(0)
const hiddenSubmenu = ref(false)
//const loading = ref(true)

const reset =()=>{
    AllDate.value = [""]
    AllDay.value = {
    day : [
            {
                time : [],
                temperature_2m : [],
                weather_code : []
            }
        ]
    }
}

const setSelectDay = (newDay : number)=>{
    selectDay.value = newDay
}

const convertDay = (date:string)=>{
    const dayConvert = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
    };

    return dayConvert.toLocaleDateString("en-EN", options)
}

watchEffect(async()=>{
    reset()
    if(props.location.latitude && !props.loading){
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
                            weather_code : []
                        }
                    )
                    AllDate.value.push("")
                }
                let temp = horlyForecastRef.value.temperature_2m[i]
                let preci = horlyForecastRef.value.weather_code[i]
                AllDate.value[dayCount] = dTime
                AllDay.value.day[dayCount]?.time?.push(dTime)
                
                AllDay.value.day[dayCount]?.temperature_2m?.push(temp as number)
                AllDay.value.day[dayCount]?.weather_code?.push(preci as number)
                count+=1
            })
        }
        
        
    }
})

const toggleMenu = ()=>{
    hiddenSubmenu.value = !hiddenSubmenu.value
}

</script>

<template>
    <div class="w-160 max-md:w-full bg-[#25253F] h-158 p-5 rounded-lg flex gap-4 flex-col">
        <div class="w-full flex justify-between items-center">
            <span class="text-white font-semibold">Hourly Forecast</span>
            <span @click.self="toggleMenu" class="flex gap-3 items-center cursor-pointer px-3 py-2 bg-[#3C3A5E] rounded-sm relative">
                <span v-if="!loading" @click.self="toggleMenu" class="text-white font-semibold">{{ convertDay(AllDate[selectDay] as string) }}</span>
                <span v-if="loading" class="text-white font-semibold">-</span>
                <img @click.self="toggleMenu" src="/assets/images/icon-dropdown.svg" alt="dropdown">
                <div  v-if="hiddenSubmenu" class="absolute right-0 -bottom-80 ">
                    <DaysMenu :loading="loading" :toggleMenu="toggleMenu" :allDay="AllDate" :setDay="setSelectDay"  />
                </div>
            </span>
        </div>
        <section class="w-full flex flex-col gap-4 overflow-y-auto">
            <HourForecast 
            v-if="!loading"
            v-for="(day, index) in AllDay.day[selectDay]?.time" 
            :hour="day" 
            :code="AllDay.day[selectDay]?.weather_code[index] as number"
            :temperature="AllDay.day[selectDay]?.temperature_2m[index] as number" 
            />
            <EmptyList v-if="loading" v-for="n in 11" :id="n" /> 
        </section>
    </div>
</template>

