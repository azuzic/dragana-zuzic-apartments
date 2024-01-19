
<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <div class="fixed flex gap-8 tl-0 wh-full z-[100] bg-slate-950 transition-500 bg-opacity-75 backdrop-blur-sm py-4"
            :class="globalStore.images.length > 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'">
        <div class="absolute z-50 right-4" @click="globalStore.images=[]; globalStore.activeImage=0;">
            <i class="fa-solid fa-circle-xmark text-3xl text-rose-700 cursor-pointer hover:text-rose-600 hover:scale-110 transition-150"></i>
        </div>
        <carousel v-if="globalStore.images.length > 0 && false" class="relative flex-center-full carousel2" :pauseAutoplayOnHover="true"
            :items-to-show="1" :wrapAround="true" :transition="750" :modelValue="globalStore.activeImage" >
            <slide v-for="slide, i in globalStore.images" :key="slide">
                <div :style="'background-image: url('+globalStore.images[globalStore.activeImage]+'.jpg)'" class="bg-contain w-full h-full bg-no-repeat bg-center">
                </div>
            </slide>                   
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
        <div :style="'background-image: url('+globalStore.images[globalStore.activeImage]+'.jpg)'" class="bg-contain w-full h-full bg-no-repeat bg-center">
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
.carousel2 {
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
        height: 100% !important;
        width: 100% !important;
    }
    .carousel__next {
        margin-right: 24px;
        height: 64px !important;
        width: 64px !important;
        background-color: #14b8a5c7;
        border-radius: 100%;
        opacity: 90%;
    }
    .carousel__prev {
        margin-left: 24px;
        height: 64px !important;
        width: 64px !important;
        background-color: #14b8a5c7;
        border-radius: 100%;
        opacity: 90%;
    }
    .carousel__icon {
        scale: 200%;
    }
}
</style>