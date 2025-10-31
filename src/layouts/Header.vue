<script setup lang="ts">


defineProps<{ unit: string }>()

</script>

<template>
<header class="w-full py-10 px-14 flex items-center justify-between">
    <img src="/assets/images/logo.svg" alt="logo">
    <span class="flex gap-3 items-center px-3 py-2 bg-[#25253F] rounded-sm">
        <img src="/assets/images/icon-units.svg" alt="units">
        <span class="text-white font-semibold">Units</span>
        <img src="/assets/images/icon-dropdown.svg" alt="dropdown">
    </span>
</header>  
</template>

