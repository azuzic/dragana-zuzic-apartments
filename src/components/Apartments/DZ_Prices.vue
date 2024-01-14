<script setup>
import { useGlobalStore } from '@/stores/globalStore'
const globalStore = useGlobalStore()
let apartments = [
    {
        name: "Terasa",
        periods: ["01.04-28.05", "28.05-17.06", "17.06-01.07", "01.07-10.07", "10.07-01.09", "01.09-15.09", "15.09-01.11"],
        prices: ["50", "50", "55", "60", "70", "50", "45"]
    },
    {
        name: "Kamin",
        periods: ["01.04-27.04", "27.04-05.06", "05.06-01.07", "01.07-14.07", "28.07-04.08", "17.08-22.08", "01.09-15.09", "15.09-01.11"],
        prices: ["40", "45", "50", "55", "65", "65", "45", "40"]
    },
    {
        name: "Smokva",
        periods: ["01.04-04.06", "20.06-08.07", "10.07-30.07", "30.07-01.09", "01.09-15.09", "15.09-01.11"],
        prices: ["60", "75", "80", "90", "65", "55"]
    },
    {
        name: "Azzuro",
        periods: ["01.01-01.04", "01.04-01.06", "01.06-01.07", "01.07-01.08", "01.08-01.09", "01.09-01.10", "01.9-01.11"],
        prices: ["40", "50", "55", "60", "65", "50", "40"]
    },
    {
        name: "Sole",
        periods: ["01.04-27.04", "27.04-05.06", "05.06-01.07", "01.07-14.07", "28.07-04.08", "17.08-22.08", "01.09-15.09", "15.09-01.11"],
        prices: ["40", "45", "50", "55", "65", "65", "45", "40"]
    }
]
</script>
<template>
    <DZ_Block>

        <div class="flex-center">
            <div class="text-4xl text-gradient-900 Lora drop-shadow-md mb-4 w-fit">
                {{ i ? 'Price' : 'Prices' }}
            </div>
        </div>

        <DZ_hr/>

        <div class="flex-center-full flex-wrap pt-4">
            <div v-for="app in (i ? apartments.filter(app => app.name == globalStore.apartment.name) : apartments)" class="w-full px-2 py-1 lg:px-4">

                <div class="flex flex-col border-2 bg-gradient-800 rounded-lg p-1">

                    <div class="flex-center rounded">
                        <div class="text-xl font-medium text-gradient-50 Lora drop-shadow-md w-fit py-2">
                            Apartment: <span class="font-extrabold uppercase">{{app.name}}</span>
                        </div>
                    </div>

                    <div class="flex lg:flex-col gap-1 w-full">                        
                        <div class="flex flex-col lg:w-full w-1/2 lg:flex-row justify-between pt-1 gap-1 whitespace-nowrap">
                            <div class="w-full lg:w-24 bg-slate-50 rounded text-center lg:text-right py-1 pr-3 text-sky-950">
                                <span class="text-gradient-900 font-bold">Period:</span>
                            </div> 
                            <div class="flex flex-col lg:flex-row grow gap-1">
                                <div v-for="period in app.periods" class="w-full lg:w-1/3 bg-slate-50 rounded flex-center">
                                    <span class="text-gradient-700 font-medium">{{period}}</span>    
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col lg:w-full w-1/2 lg:flex-row justify-between pt-1 gap-1 whitespace-nowrap">
                            <div class="w-full lg:w-24 bg-slate-50 rounded text-center lg:text-right py-1 pr-3">
                                <span class="text-gradient-300 font-bold invert">Price (€):</span>   
                            </div> 
                            <div class="flex flex-col lg:flex-row grow gap-1">
                                <div v-for="price in app.prices" class="w-full lg:w-1/3 bg-slate-50 rounded flex-center">
                                    <span class="text-gradient-400 font-medium invert">{{price}}</span>    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </DZ_Block>
</template>
<script>
export default {
    name: "DZ_Prices",
    props: { i: Boolean }
}
</script>