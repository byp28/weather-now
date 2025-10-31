<script setup lang="ts">

defineProps<{ hour: string, temperature : string, }>()

</script>

<template>
    <div class="w-full bg-[#2F2F49] text-white h-full font-semibold p-4 rounded-lg flex justify-between items-center">
        <div class="flex gap-2 items-center">
            <img class="w-8" src="/assets/images/icon-rain.webp" alt="rain">
            <span>{{ hour }} PM</span>
        </div>
        <span>{{ temperature }}°</span>
    </div>
</template>

