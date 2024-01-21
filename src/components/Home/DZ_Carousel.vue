<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { ref } from "vue";
import { kamenjak } from "@/stores/images.js";
import map1 from "@/assets/cape-rt-kamenjak-premantura-beaches-map.jpg";
import map2 from "@/assets/MAP_KAMENJAK.jpg";
const globalStore = useGlobalStore()
const currentPage = ref(1);
const itemsPerPage = 9;
</script>
<template>

    <div class="flex flex-col sm:flex w-full gap-8">
        <DZ_Block>
                <div class="flex-center mb-6">
                    <div class="text-xl text-gradient-700 font-medium w-fit">
                        Photos of Premantura & Kamenjak
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <vue-awesome-paginate
                        class="scale-75 sm:scale-100"
                        :total-items="kamenjak.length"
                        :items-per-page="itemsPerPage"
                        :max-pages-shown="3"
                        v-model="currentPage"
                    />  
                    <div class="flex-center flex-wrap w-full">     
                        <div v-for="img, i in kamenjak" class="h-32 sm:h-52 w-1/2 sm:w-1/3 p-1" 
                            :class="[(i<(currentPage-1)*itemsPerPage+itemsPerPage) && i>=(currentPage-1)*itemsPerPage ? '' : 'hidden']"
                            @click="globalStore.images=kamenjak; globalStore.activeImage=i;">
                            <div class="relative rounded-lg drop-shadow-sm hover:drop-shadow-lg hover:scale-110 hover:z-50 
                                transition-300 bg-contain bg-no-repeat bg-center wh-full cursor-pointer"
                                :style="'background-image: url('+img+'l.jpg);'">
                            </div>  
                        </div>                                  
                    </div>
                    <vue-awesome-paginate
                        class="scale-75 sm:scale-100"
                        :total-items="kamenjak.length"
                        :items-per-page="itemsPerPage"
                        :max-pages-shown="3"
                        v-model="currentPage"
                    />  
                </div>
                
            </DZ_Block>
        <div class="flex flex-col md2:flex-row w-full gap-8">        
            <DZ_Block>
                <div class="flex-center mb-6">
                    <div class="text-xl text-gradient-700 font-medium w-fit">
                        Maps
                    </div>
                </div>

                <img :src="map2" class="mb-2 rounded">
                <img :src="map1" class="rounded">
            </DZ_Block>
            <DZ_Block>
                <div class="text-teal-900 text-sm text-justify flex flex-col gap-4 mt-12">
                    <div>
                        The Kamenjak Peninsula or Cape Kamenjak, also known as the Peninsula 
                        of Premantura, is the southernmost cape of Istria. It delves 
                        deep into the sea, about six kilometers long with an average width of 
                        about a kilometer. The rugged coastline, around 30 kilometers long, 
                        consists of numerous bays and various beaches, forming an area of 
                        exceptional natural beauty, including 11 uninhabited islands. The 
                        west coast is steeper, and its northern part partly encloses the 
                        Medulin Bay.
                    </div>
                    <div>
                        The coast of the Kamenjak peninsula is incredibly rugged, offering 
                        many places to swim, high water jump, etc. Some places are accessible 
                        only from the sea. After swimming, you can relax in one of the beach 
                        bars on Kamenjak.
                    </div>
                    <div>
                        The relatively small nature reserve is home to many plant species, 
                        including 20 orchids, some of which are indigenous. The lack of 
                        campgrounds, hotels, or buildings on the peninsula allows the flora 
                        and fauna to remain undisturbed.
                    </div>
                    <div>
                        When entering Cape Kamenjak, a fee is payable for a motor vehicle, 
                        determined by type (motorbike, car, van). Walkers and cyclists do 
                        not pay this fee. More information about entrance tickets for motor 
                        vehicles in the significant landscape of Lower Kamenjak and the 
                        Medulin Archipelago can be found here.
                    </div>
                    <div>
                        Kamenjak is ideal for cyclists, with routes on smooth asphalt and 
                        access to places where cars cannot go, eliminating parking issues.
                    </div>
                    <div>
                        Photographers and those interested in local flora will find Kamenjak 
                        appealing. For adventure seekers, the underwater world around Rt 
                        Kamenjak is a must-see.
                    </div>
                    <div>
                        Two marine ports, Polje Port and Podlokva Port, are on Cape Kamenjak, 
                        where local citizens of Premantura anchor their boats. For commercial 
                        yachting anchorage, Veliki Portic Cove is the most popular.
                    </div>
                </div>
            </DZ_Block>
        </div>
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "DZ_Carousel",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation, 
    },
};
</script>
<style lang="scss">
.carousel1 {
    .carousel__pagination-button {
        display: block;
        z-index: 500;
        width: 12px;
        height: 12px;
        background: #ccfbf1 !important;
        margin-left: 4px;
        margin-right: 4px;
        border-radius: 100%;
        filter: drop-shadow(0px 0px 2px black);
            transition: all 150ms ease-in-out !important;
        &:hover {
            opacity: 75%;
            transition: all 150ms ease-in-out !important;
        }
    }
    .carousel__pagination-button--active {
        background: #14b8a6 !important;
        opacity: 100%;
        scale: 125%;
            transition: all 300ms ease-in-out !important;
        &:hover {
            opacity: 100%;
            transition: all 150ms ease-in-out !important;
        }
    }
    .carousel__pagination-button::after {
        display: none;
    }
    .carousel__track {
        height: 100%;
    }
    .carousel__pagination {
        width: 100%;
        position: absolute;
        z-index: 50;
        bottom: 16px;
        z-index: 500;
    }
    .carousel__viewport {
        height: fit-content !important;
        width: 100% !important;
    }
}
</style>