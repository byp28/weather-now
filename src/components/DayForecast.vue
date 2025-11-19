<script setup lang="ts">
import { findIcon } from '../utils/apiMeteo';


const props = defineProps<{ day: string, minTemperature : number, maxTemperature : number, code : number  }>()

const dateConvert = new Date(props.day)
const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
};
</script>

<template>
    <div class="w-24 bg-[#25253F] p-3 h-35 rounded-lg flex flex-col justify-between text-white">
        <span class="text-center font-semibold">{{dateConvert.toLocaleDateString("en-EN", options)}}</span>
        <img :src="`/assets/images/${findIcon(code)}`" :alt="`weather_code_${code}`">
        <div class="w-full flex justify-between items-center text-base">
            <span>{{ Math.round(maxTemperature) }}°</span>
            <span class="text-gray-300">{{ Math.round(minTemperature) }}°</span>
        </div>
    </div>
</template>

