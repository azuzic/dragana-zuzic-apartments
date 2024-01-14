<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
globalStore.setRouteParams();
</script>
<template>
    <div class="flex flex-col justify-start gap-8 pt-4 sm:pt-8">       

        <div class="px-4">
            <div class="flex-col-center | transition-500 p-DZ gap-8">

                <DZ_Images/>
                <DZ_Amenities/>
                <DZ_Prices i/>
                <DZ_Info/>

                <DZ_a mail/>
                
            </div>
        </div>

        <DZ_Footer/>

    </div>
</template>

<script>
import DZ_Info from '@/components/Apartments/DZ_Info.vue';
import DZ_Images from '@/components/Apartments/DZ_Images.vue';
import DZ_Prices from '@/components/Apartments/DZ_Prices.vue';
import DZ_Amenities from '@/components/Apartments/DZ_Amenities.vue';

export default {
    name: "DZ_ApartmentView",
    components: { DZ_Info, DZ_Images, DZ_Prices, DZ_Amenities },
};
</script>