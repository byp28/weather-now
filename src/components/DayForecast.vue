<script setup lang="ts">

defineProps<{ day: string, temperature : string, minTemperature : number, maxTemperature : number  }>()

</script>

<template>
    <div class="w-24 bg-[#25253F] p-3 h-35 rounded-lg flex flex-col justify-between text-white">
        <span class="text-center font-semibold">{{ day }}</span>
        <img src="/assets/images/icon-sunny.webp" :alt=temperature>
        <div class="w-full flex justify-between items-center text-base">
            <span>{{ maxTemperature }}°</span>
            <span class="text-gray-300">{{ minTemperature }}°</span>
        </div>
    </div>
</template>

