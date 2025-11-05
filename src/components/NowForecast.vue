<script setup lang="ts">
import DailyForecast from './DailyForecast.vue';
import DetailForecast from './DetailForecast.vue';
import HourlyForecast from './HourlyForecast.vue';
import Today from './Today.vue'

</script>

<template>
    <section class="px-14 py-2 flex gap-5  justify-between">
        <div class="w-full flex flex-col gap-6">
            <Today/>
            <DetailForecast/>
            <DailyForecast/>
        </div>
        <HourlyForecast/>
    </section>
</template>

