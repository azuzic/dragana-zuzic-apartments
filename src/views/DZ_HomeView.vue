<template>
    <div class="flex flex-col justify-start gap-8  pt-4 sm:pt-16">     
          
        <div class="px-4">            
            <div class="flex-col-center | transition-500 p-DZ gap-8">

                <DZ_Welcome/>    
                <DZ_Carousel/>
                <DZ_Images/>
                <DZ_a mail/>
                
            </div>
        </div>

        <DZ_Footer/>

    </div>
</template>

<script>
import DZ_Welcome from '@/components/Home/DZ_Welcome.vue';
import DZ_Carousel from '@/components/Home/DZ_Carousel.vue';
import DZ_Images from '@/components/Home/DZ_Images.vue';

export default {
    name: "DZ_HomeView",
    components: { DZ_Welcome, DZ_Carousel, DZ_Images },
};
</script>