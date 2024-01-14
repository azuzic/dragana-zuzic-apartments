<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
</script>
<template>
    <DZ_Block>
        <div class="flex-center">
            <div class="text-4xl text-gradient-900 Lora drop-shadow-md mb-4 w-fit">
                Amenities
            </div>
        </div>
        <div class="flex flex-col gap-2 text-teal-950">
            <ol class="text-sm flex flex-col gap-1.5 mt-4">
                <li v-for="detail in globalStore.apartment.amenities" v-html="detail"></li>
            </ol>
        </div>
    </DZ_Block>
</template>
<script>
export default {
    name: "DZ_Amenities"
}
</script>