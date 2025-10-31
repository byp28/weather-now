<script setup lang="ts">

defineProps<{ detail: string, value : string  }>()

</script>

<template>
    <div class="bg-[#25253F] flex flex-col gap-2 w-45 p-4 h-26 rounded-lg text-white">
        <span class="text-base font-semibold">{{ detail }}</span>
        <span class="text-3xl font-medium">{{ value }}</span>
    </div>
</template>

