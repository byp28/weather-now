<script setup lang="ts">
import type { ILocation } from '../utils/apiGeo';
import { findIcon } from '../utils/apiMeteo';


const props = defineProps<{location : ILocation, date : string, temp?: number, loading : boolean, code : number}>()

const convertDate = (date : string)=>{
    const dateConvert = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        day: "numeric", 
        month: "short",
    };
    return dateConvert.toLocaleDateString("en-EN", options)
}

</script>

<template>
    <div class="w-full h-72.5 max-xl:h-75 max-md:h-100 relative">
        <div v-if="loading" class="w-full h-full absolute top-0 left-0 z-1 rounded-lg bg-[#25253F] flex justify-center flex-col gap-3 items-center">
            <img src="/assets/images/icon-loading.svg" class=" animate-spin" alt="loading">
            <span class="text-xl text-white">Loading...</span>
        </div>
        <img v-if="!loading" src="/assets/images/bg-today-large.svg" class="w-full h-full absolute max-md:hidden top-0 left-0 z-1" alt="today">
        <img v-if="!loading" src="/assets/images/bg-today-small.svg" class="w-full h-full absolute hidden max-md:block top-0 left-0 z-1" alt="today">
        <div v-if="!loading" class="w-full h-full absolute z-2 text-white flex items-center justify-between p-5">
            <div class="flex flex-col gap-3">
                <span class="text-3xl font-semibold">{{location.name}}, {{ location.country }}</span>
                <span class="text-xl">{{ convertDate(date) }}</span>
            </div>
            <div class="flex items-center justify-center gap-1">
                <img class="w-35" :src="`/assets/images/${findIcon(code)}`" :alt="`weather_code_${code}`">
                <span class="text-7xl font-semibold">{{Math.round(temp as number)}}°</span>
            </div>
        </div>
    </div>
</template>

