<template>
    <div class="rounded-b-lg | w-full | flex-col-center drop-shadow">
        <div class="Lora text-sky-50 text-5xl sm:text-7xl font-bold italic drop-shadow-DZ2n mt-48 sm:mt-24 text-center">
            Apartments Premantura Dragana
        </div>
        <div class="mt-4 sm:mt-16 | flex-col-center gap-2 px-4 xs:px-16 sm:px-5 transition-500">
            <div class="Lora text-gradient-400 text-lg sm:text-3xl font-medium drop-shadow-DZ2 | flex gap-2">
                Croatia
                <span class="text-gradient-200"> • </span>
                Istra
                <span class="text-gradient-200"> • </span>
                Premantura
            </div>
            <div class="bg-gradient-400 drop-shadow-DZ1 px-6 py-1.5 rounded mt-2 sm:-mb-11">                
                <div class="Lora text-gradient-950 font-medium flex flex-wrap xs:justify-center items-center">
                    <div>
                        <i class="fas fa-mobile-alt mr-1"></i> Cell (WhatsApp, Viber): 
                        <b class="ml-1 font-black whitespace-nowrap">+385 98 183 66 16 </b>
                    </div>
                    <div>
                        <i class="fas fa-envelope mr-1 xs:ml-8"></i> Email: 
                        <b class="ml-1 whitespace-nowrap">draga.zuzic@gmail.com</b>
                    </div>                    
                </div>
            </div>
        </div>
        <div v-if="$route.name == 'Apartment'" class="p-DZ w-full pt-4 sm:pt-16 transition-500">
            <div class="px-4">
                <DZ_Menu/>
            </div>
        </div>
    </div>
</template>

<script>
import DZ_Menu from '@/components/Apartments/DZ_Menu.vue';

export default {
    name: "DZ_Title",
    components: { DZ_Menu },
} 
</script>