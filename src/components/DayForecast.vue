<script setup lang="ts">

const props = defineProps<{ day: string, minTemperature : number, maxTemperature : number  }>()

const dateConvert = new Date(props.day)

</script>

<template>
    <div class="w-24 bg-[#25253F] p-3 h-35 rounded-lg flex flex-col justify-between text-white">
        <span class="text-center font-semibold">{{ dateConvert.toUTCString().substring(0,3) }}</span>
        <img src="/assets/images/icon-sunny.webp" alt="k">
        <div class="w-full flex justify-between items-center text-base">
            <span>{{ maxTemperature }}°</span>
            <span class="text-gray-300">{{ minTemperature }}°</span>
        </div>
    </div>
</template>

