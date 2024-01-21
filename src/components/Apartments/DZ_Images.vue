<script setup>
import { ref } from "vue";
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
const currentPage = ref(1);
</script>
<template>
    <DZ_Block>
        <div class="flex-center">
            <div class="text-4xl text-gradient-900 Lora drop-shadow-md mb-4 w-fit">
                {{globalStore.apartment.name}}
            </div>
        </div>
        <DZ_hr/>
        <div class="text-teal-900 text-sm text-justify flex flex-col gap-4 mt-4 justify-center items-center">
            <vue-awesome-paginate
            class="scale-75 sm:scale-100"
                :total-items="globalStore.apartment.images.length"
                :items-per-page="9"
                :max-pages-shown="3"
                v-model="currentPage"
            />      
            <div class="flex-center flex-wrap w-full">    
                <div v-for="img, i in globalStore.apartment.images" 
                :class="[(i<(currentPage-1)*9+9) && i>=(currentPage-1)*9 ? '' : 'hidden']"
                class="h-32 sm:h-52 w-1/2 sm:w-1/3 p-1"
                @click="globalStore.images=globalStore.apartment.images; globalStore.activeImage=i;">
                    <div class="relative rounded-lg drop-shadow-sm hover:drop-shadow-lg hover:scale-110 hover:z-50 
                        transition-300 bg-contain bg-center bg-no-repeat wh-full cursor-pointer"
                        :style="'background-image: url('+img+'l.jpg);'">
                    </div>  
                </div>                                  
            </div>     
            <vue-awesome-paginate
            class="scale-75 sm:scale-100"
                :total-items="globalStore.apartment.images.length"
                :items-per-page="9"
                :max-pages-shown="3"
                v-model="currentPage"
            />           
        </div>
    </DZ_Block>
</template>
<script>
export default {
    name: "DZ_Images",
};
</script>