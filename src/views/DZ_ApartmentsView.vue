<template>
    <div class="flex flex-col justify-start gap-8  pt-4 sm:pt-16">    

        <div class="px-4">
            <div class="flex-col-center | transition-500 p-DZ gap-8">

                <DZ_Apartments/>
                <DZ_Prices/>
                <DZ_Info/>
                <DZ_a mail/>
                
            </div>
        </div>

        <DZ_Footer/>

    </div>
</template>

<script>
import DZ_Apartments from '@/components/Apartments/DZ_Apartments.vue';
import DZ_Prices from '@/components/Apartments/DZ_Prices.vue';
import DZ_Info from '@/components/Apartments/DZ_Info.vue';

export default {
    name: "DZ_ApartmentsView",
    components: { DZ_Apartments, DZ_Prices, DZ_Info},
};
</script>