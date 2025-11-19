<script setup lang="ts">
import { findIcon } from '../utils/apiMeteo';


const props = defineProps<{ hour: string, temperature : number, code : number }>()
const hourConvert = new Date(props.hour)
const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
};
</script>

<template>
    <div class="w-full bg-[#2F2F49] text-white h-full font-semibold p-4 rounded-lg flex justify-between items-center">
        <div class="flex gap-2 items-center">
            <img class="w-8" :src="`/assets/images/${findIcon(code)}`" :alt="`weather_code_${code}`">
            <span>{{ hourConvert.toLocaleDateString("en-EN", options).slice(-5)}}</span>
        </div>
        <span>{{ Math.round(temperature) }}°</span>
    </div>
</template>

