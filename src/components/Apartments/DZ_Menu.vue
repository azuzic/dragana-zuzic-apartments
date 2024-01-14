
<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
let apartments = ["Terasa","Kamin","Smokva","Azzuro","Sole"];
</script>

<template>
    <DZ_Block i>
        <div class="flex-center flex-wrap gap-4 sm:gap-8 px-4">
            <div v-for="app in apartments" @click="$router.push({ path: ('/apartments/'+app.toLowerCase()) }).catch(() => { });">
                <div class="relative flex-center w-fit h-fit bg-gradient-800 rounded-lg drop-shadow-xl p-0.5 text-lg transition-300 font-light group"
                    :class="app.toLowerCase() == globalStore.param ? '' : 'hover:scale-105 hover:font-bold cursor-pointer'">
                    <div class="bg-slate-50 rounded-md wh-full px-4 transition-300" :class="app.toLowerCase() == globalStore.param ? 'bg-opacity-100' : 'bg-opacity-0 group-hover:px-6'">
                        <span class="relative z-10 transition-300" 
                            :class="app.toLowerCase() == globalStore.param ? 'text-gradient-800 font-bold' : ' text-gradient-100'">
                            {{ app }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </DZ_Block>
</template>

<script>
export default {
    name: "DZ_Menu",
    props: ['apartment'],
};
</script>