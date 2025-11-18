<script setup lang="ts">

defineProps<{ detail: string, value : number, unit : string  }>()

</script>

<template>
    <div class="bg-[#25253F] flex flex-col gap-4 w-45 p-4 h-28 rounded-lg text-white">
        <span class="text-base font-base">{{ detail }}</span>
        <span class="text-3xl font-base">{{ Math.round(value) }}{{ unit }}</span>
    </div>
</template>

