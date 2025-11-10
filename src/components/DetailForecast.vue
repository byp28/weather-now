<script setup lang="ts">
import type { TUnit } from '../utils/apiMeteo';
import Information from './information.vue';

defineProps<{temperature? : number, precipitation? : number, humidity? : number, wind? : number , unit : TUnit}>()

</script>

<template>
    <section class="w-full flex justify-between max-md:flex-wrap max-md:justify-between max-md:gap-8 items-center">
        <Information detail="Feels Like" :value="`${temperature}°`"/>
        <Information detail="Humidity" :value="`${humidity}%`"/>
        <Information detail="Wind" :value="`${wind} ${unit.speed}`"/>
        <Information detail="Precipitation" :value="`${precipitation} ${unit.precipitation}`"/>
    </section>
</template>

