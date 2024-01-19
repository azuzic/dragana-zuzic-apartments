<script setup>
import { kamenjak } from "@/stores/images.js";
</script>
<template>
    <div class="flex flex-col lg:flex-row sm:flex w-full gap-8">
        <DZ_Block>
            <div class="flex-center mb-6">
                <div class="text-xl text-gradient-700 font-medium w-fit">
                    Photos of Premantura & Kamenjak
                </div>
            </div>

            <div class="absolute w-4 h-full tl-0 sm:bg-gradient-to-r from-slate-50 via-slate-50 to-transparent z-10"></div>
            <div class="absolute w-4 h-full top-0 right-0 sm:bg-gradient-to-l from-slate-50 via-slate-50 to-transparent z-10"></div>
            <carousel class="relative h-fit w-full flex-center carousel1" :pauseAutoplayOnHover="true"
                :items-to-show="1" :wrapAround="true" :autoplay="2500" :transition="750">
                <slide v-for="slide in kamenjak" :key="slide">
                    <div class="h-56 w-full rounded-lg px-4 mx-4 bg-cover-center"
                        :style="'background-image: url('+slide+');'">
                    </div>
                </slide>                   
                <template #addons>
                    <pagination/>
                </template>
            </carousel>
        </DZ_Block>
        <DZ_Block>
            <div class="text-teal-900 text-sm text-justify flex flex-col gap-4 mt-12">
                <div>
                    Discover an array of amenities and attractions surrounding our resort.
                    Indulge in culinary delights at various restaurants, shop for unique finds
                    in charming boutiques, and dance the night away in vibrant discotheques.
                    For the adventurous, our tourist agencies offer exciting excursions, while
                    water sports enthusiasts can partake in thrilling activities.
                </div>
                <div>
                    Immerse yourself in leisure with our resort's tennis courts or explore the
                    surrounding area with a visit to the riding school. For those seeking the
                    depths of the Adriatic, our diving center awaits, offering wreck diving,
                    comprehensive diving courses, equipment rentals..
                </div>
            </div>
        </DZ_Block>
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