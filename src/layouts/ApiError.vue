<script setup lang="ts">


</script>

<template>
    <div class="w-full flex flex-col pt-20 text-xl gap-4 text-white items-center justify-center">
        <img class="w-10 h-10" src="/assets/images/icon-error.svg" alt="error">
        <span class="text-4xl font-semibold">Something went wrong</span>
        <span class="text-lg text-center text-neutral-300">We couldn't connect to the server(API error). Please try again in a few moments.</span>
        <span class="flex gap-2 p-4 cursor-pointer rounded-lg items-center bg-[#25253F]"><img src="/assets/images/icon-retry.svg" alt="retry"> Retry</span>
    </div>
</template>
