<script setup lang="ts">
import { ref } from 'vue'
import { findLocation, type ILocation } from '../utils/apiGeo'
import type { Ref } from 'vue'

defineProps<{setLocation : {(location : ILocation):void}}>()

const place = ref("")
const hideResponse = ref(false)
const loading = ref(true)
const locate : Ref<ILocation> = ref({})
const AllLocation : Ref<Array<ILocation>> = ref([])

const isSearching = async ()=>{
    if(place.value !== ""){
        hideResponse.value = true
        const findThisPlace = await findLocation(place.value)
        AllLocation.value = findThisPlace.data.results
        if(AllLocation.value){
            loading.value = false;
        }else{
            loading.value = true;
        }
    }else{
        hideResponse.value = false
    }

}


</script>

<template>
    <div class="w-full flex justify-center max-md:flex-col items-center gap-4 py-10">
        <div>
            <div class="bg-[#25253F] text-white p-3 rounded-lg w-115 flex gap-3 items-center relative">
                <img src="/assets/images/icon-search.svg" alt="search"/>
                <input v-model="place" @input="isSearching" placeholder="Search for a place ..."   class="w-full outline-none"/>
                <div v-if="hideResponse" class="flex w-full bg-[#25253F] rounded-lg  absolute z-7 p-2 top-15 left-0  flex-col gap-1">
                    <div v-if="loading" class="w-full p-2 flex items-center gap-2 h-10 rounded-lg cursor-pointer hover:bg-[#2F2F49]"><img class="w-3 animate-spin" src="/assets/images/icon-loading.svg" alt="loading"> <span>Search in progress "{{ place }}"</span></div>
                    <div v-for="location in AllLocation" @click="setLocation(location)"  class="w-full p-2 flex items-center gap-2 h-10 rounded-lg cursor-pointer hover:bg-[#2F2F49]"><span>{{ location.name }}, {{ location.country }}</span></div>
                </div>
            </div>
        </div>
        <button class="py-3 px-5 max-md:w-full max-md:max-w-115 rounded-lg bg-[#4657D9] text-white font-semibold">Search</button>
    </div>
</template>