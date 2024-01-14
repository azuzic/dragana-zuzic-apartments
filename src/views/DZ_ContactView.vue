<template>
    <div class="flex flex-col justify-start gap-8 pt-4 sm:pt-16">     

        <div class="px-4 mb-24 sm:mb-0">
            <div class="flex-col-center | transition-500 p-DZ gap-8">

                <DZ_Contact/>
                <DZ_Map/>
                <DZ_a mail/>
                
            </div>
        </div>  

        <DZ_Footer/>

    </div>
</template>

<script>
import DZ_Contact from '@/components/Contact/DZ_Contact.vue';
import DZ_Map from '@/components/Contact/DZ_Map.vue';

export default {
    name: "DZ_ContactView",
    components: { DZ_Contact, DZ_Map },
};
</script>