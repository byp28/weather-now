<script setup lang="ts">
import type { TUnit } from '../../utils/apiMeteo';


defineProps<{unit : TUnit, toggleMenu : {():void}}>()

</script>

<template>
    <section class="w-50 text-white bg-[#25253F] rounded-sm p-2 flex flex-col gap-2 items-center">
        <span @click.self="toggleMenu" @click="unit.swicthToImperial()" class="w-full p-2 text-sm font-semibold cursor-pointer rounded-sm  hover:bg-[#2F2F49] hover:border-white ">Switch to Imperial</span>
        <span class="w-full px-2 text-xs font-semibold text-[#818296]">Temperature</span>
        <span @click.self="toggleMenu" @click="unit.setTemperature('celsius')" class="w-full flex items-center justify-between p-2 text-sm font-semibold cursor-pointer  rounded-sm  hover:bg-[#2F2F49] hover:border-white ">Celsius (°C) <img v-if="unit.temparature === 'celsius'" src="/assets/images/icon-checkmark.svg" alt="check"/></span>
        <span @click.self="toggleMenu" @click="unit.setTemperature('fahrenheit')" class="w-full flex items-center justify-between p-2 text-sm font-semibold cursor-pointer  rounded-sm  hover:bg-[#2F2F49] hover:border-white ">fahrenheit (°F) <img v-if="unit.temparature === 'fahrenheit'" src="/assets/images/icon-checkmark.svg" alt="check"/></span>
        <span class="w-full px-2 border-b-1 border-b-[#464655]"></span>
        <span class="w-full px-2 text-xs font-semibold text-[#818296]">Wind Speed</span>
        <span @click.self="toggleMenu" @click="unit.setSpeed('kmh')" class="w-full flex items-center justify-between p-2 text-sm font-semibold cursor-pointer  rounded-sm  hover:bg-[#2F2F49] hover:border-white ">km/h <img v-if="unit.speed === 'kmh'" src="/assets/images/icon-checkmark.svg" alt="check"/></span>
        <span @click.self="toggleMenu" @click="unit.setSpeed('mph')" class="w-full flex items-center justify-between p-2 text-sm font-semibold cursor-pointer  rounded-sm  hover:bg-[#2F2F49] hover:border-white ">mph <img v-if="unit.speed === 'mph'" src="/assets/images/icon-checkmark.svg" alt="check"/></span>
        <span class="w-full px-2 border-b-1 border-b-[#464655]"></span>
        <span class="w-full px-2 text-xs font-semibold text-[#818296]">Precipitation</span>
        <span @click.self="toggleMenu" @click="unit.setPrecipitation('mm')" class="w-full flex items-center justify-between p-2 text-sm font-semibold cursor-pointer  rounded-sm  hover:bg-[#2F2F49] hover:border-white ">Milimeters (mm) <img v-if="unit.precipitation === 'mm'" src="/assets/images/icon-checkmark.svg" alt="check"/></span>
        <span 
        @click="()=>{
            unit.setPrecipitation('inch')
            //toggleMenu()
            }" 
        class="w-full flex items-center justify-between p-2 text-sm font-semibold cursor-pointer  rounded-sm  hover:bg-[#2F2F49] hover:border-white ">Inches (in) <img v-if="unit.precipitation === 'inch'" src="/assets/images/icon-checkmark.svg" alt="check"/></span>
    </section>
</template>

