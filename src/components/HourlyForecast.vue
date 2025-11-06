<script setup lang="ts">
import { ref } from 'vue';
import DaysMenu from './HorlyForecast/DaysMenu.vue';
import HourForecast from './HourForecast.vue';

const hiddenSubmenu = ref(false)
//const loading = ref(true)

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

