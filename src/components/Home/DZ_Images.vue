<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { apartments_images } from "@/stores/images.js";
const globalStore = useGlobalStore()
</script>
<template>
    <DZ_Block>
        <div class="text-teal-900 text-sm text-justify flex flex-col gap-4">

            <div>
                Nestled in this charming locale, 
                <span class="text-gradient-600 font-medium">APARTMENTS DRAGANA</span>
                is a visually appealing 
                and guest-friendly accommodation, conveniently located just 300 meters from 
                the beach. Our property combines aesthetic charm with comfort, offering a 
                welcoming retreat for our guests. Discover a delightful stay that harmoniously 
                blends style and convenience.
            </div>

            <div class="flex-center flex-wrap w-full">     
                <div v-for="img, i in apartments_images.garden" class="h-32 sm:h-52 w-1/2 sm:w-1/3 p-1" @click="globalStore.images=apartments_images.garden; globalStore.activeImage=i;">
                    <div class="relative rounded-lg drop-shadow-sm hover:drop-shadow-lg hover:scale-110 hover:z-50 
                        transition-300 bg-cover-center wh-full cursor-pointer"
                        :style="'background-image: url('+img+');'">
                    </div>  
                </div>                                  
            </div>

        </div>
    </DZ_Block>
</template>