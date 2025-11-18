<script setup lang="ts">



defineProps<{allDay : Array<string>, setDay : {(index : number):void}, toggleMenu : {():void}}>()

const convertDay = (date:string)=>{
    const dayConvert = new Date(date)
    const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
    };

    return dayConvert.toLocaleDateString("en-EN", options)
}

</script>

<template>
    <section class="w-40 text-white border-1 border-[#2F2F49] bg-[#25253F] rounded-sm p-1 flex flex-col gap-2 items-center">
        <span @click.self="toggleMenu" @click="setDay(index)" v-for="(day, index) in allDay" class="w-full p-2 text-sm font-semibold cursor-pointer rounded-sm  hover:bg-[#2F2F49] hover:border-white ">{{ convertDay(day) }}</span>

    </section>
</template>

