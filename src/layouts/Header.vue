<script setup lang="ts">
import { ref } from 'vue';
import Submenu from '../components/Header/Submenu.vue';
import type { TUnit } from '../utils/apiMeteo';



defineProps<{ unit: TUnit }>()

const hiddenSubmenu = ref(false)
//const loading = ref(true)

const toggleMenu = ()=>{
    hiddenSubmenu.value = !hiddenSubmenu.value
}

</script>

<template>
<header class="w-full py-10 max-md:py-8 max-md:px-8 px-14 flex items-center justify-between">
    <img src="/assets/images/logo.svg" alt="logo">
    <span @click.self="toggleMenu" class="flex cursor-pointer gap-3 items-center px-3 py-2 bg-[#25253F] rounded-sm relative">
        <img @click.self="toggleMenu" src="/assets/images/icon-units.svg" alt="units">
        <span @click.self="toggleMenu" class="text-white font-semibold">Units</span>
        <img @click.self="toggleMenu" src="/assets/images/icon-dropdown.svg" alt="dropdown">
        <div  v-if="hiddenSubmenu" class="absolute z-50 right-0 -bottom-104">
            <Submenu :unit="unit" :toggleMenu="toggleMenu"/>
        </div>
    </span>
</header>  
</template>

