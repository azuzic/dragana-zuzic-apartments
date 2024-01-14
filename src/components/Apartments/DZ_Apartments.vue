<script setup>
import { apartments_images } from "@/stores/images.js";

let apartments = [
    {
        name: "Terasa",
        img: apartments_images.terasa[0],
        capacity: "2-4"
    },
    {
        name: "Kamin",
        img: apartments_images.kamin[1],
        capacity: "2"
    },
    {
        name: "Smokva",
        img: apartments_images.smokva[5],
        capacity: "4"
    },
    {
        name: "Azzuro",
        img: apartments_images.azzuro[0],
        capacity: "2-4"
    },
    {
        name: "Sole",
        img: apartments_images.sole[0],
        capacity: "2"
    }
]
</script>
<template>
    <DZ_Block>
        <div class="flex-center">
            <div class="text-4xl text-gradient-900 Lora drop-shadow-md mb-4 w-fit">
                Apartments
            </div>
        </div>                
        <DZ_hr class="mb-4"/>

        <div class="flex-center-full flex-wrap">                    
            <div v-for="app in apartments" class="flex-col-center w-full lg:w-1/3 sm:w-1/2 p-4 drop-shadow group" @click="$router.push({ path: ('/apartments/'+app.name.toLowerCase()) }).catch(() => { });">
                <div class="relative flex-center-full rounded-lg overflow-hidden">

                    <div class="absolute bg-opacity-75 tl-0 wh-full z-10 flex-center pointer-events-none transition-300
                    group-hover:py-2">
                    <div class="absolute w-full h-full group-hover:h-1/3 bg-gradient-900 z-10 opacity-60 group-hover:opacity-80 transition-500"></div>
                    <div class="relative z-20 text-5xl text-gradient-100 group-hover:text-gradient-50 w-fit transition-300
                        font-normal group-hover:font-extrabold"> 
                        <span class="Lora">{{app.name}}</span>                                     
                        <br>
                        <span class="text-sm font-medium group-hover:font-bold group-hover:mt-2 transition-300 flex-center">
                            <i class="fa-solid fa-user-group mr-2 group-hover:mr-2 transition-500"></i>
                            Persons: <span class="ml-1 text-gradient-400">{{app.capacity}}</span>
                        </span>
                    </div>
                </div>

                <div class="relative drop-shadow-sm transition-500 bg-cover-center
                    w-full aspect-square cursor-pointer hover:scale-110"
                    :style="'background-image: url('+app.img+');'">
                </div>  
            </div>
        </div>
    </div>

</DZ_Block>
</template>
<script>
export default {
    name: "DZ_Apartments"
}
</script>