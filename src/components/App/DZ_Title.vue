<template>
    <div class="rounded-b-lg | w-full | flex-col-center drop-shadow">
        <div class="Lora text-sky-50 text-5xl sm:text-7xl font-bold italic drop-shadow-DZ2n mt-48 sm:mt-24 text-center">
            Private Apartments Dragana
        </div>
        <div class="Lora text-gradient-400 text-lg sm:text-3xl font-medium drop-shadow-DZ2 mt-4 sm:mt-16 | flex gap-2">
            Croatia
            <span class="text-gradient-200"> • </span>
            Istra
            <span class="text-gradient-200"> • </span>
            Premantura
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