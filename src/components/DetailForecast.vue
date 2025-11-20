<script setup lang="ts">
import type { TUnit } from '../utils/apiMeteo';
import Information from './information.vue';

defineProps<{temperature? : number, precipitation? : number, humidity? : number, wind? : number , unit : TUnit, loading : boolean}>()

</script>

<template>
    <section class="w-full flex justify-between max-md:flex-wrap max-md:justify-between max-md:gap-8 items-center">
        <Information :loading = "loading" detail="Feels Like" :value="temperature as number" unit="°"/>
        <Information :loading = "loading" detail="Humidity" :value="humidity as number" unit="%"/>
        <Information :loading = "loading" detail="Wind" :value="wind as number" :unit="unit.speed"/>
        <Information :loading = "loading" detail="Precipitation" :value="precipitation as number" :unit="unit.precipitation"/>
    </section>
</template>

