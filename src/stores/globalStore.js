import { defineStore } from "pinia";
import router from "@/router/index.js"

import { apartments_images } from "@/stores/images.js";

export const useGlobalStore = defineStore("globalStore", {
	state: () => ({
        activeImage: 0,
        images: [],
        param: '',
        apartment: {},
        apartments: [
            {
                name: "Terasa",
                images: apartments_images.terasa,
                amenities: [
                    `Has an <span class="text-gradient-700"> <b>air conditioner</b> <i class="fa-solid fa-wind ml-1"></i></span>`,
                    `Has a room with <b>1<span class="text-gradient-700"> double-sized bed<i class="fa-solid fa-bed ml-1"></i></span></b>`, 
                    `Has a living room with <b>2</b> sofas that can transform into 
                    <span class="text-gradient-700"><b>one-sized beds <i class="fa-solid fa-bed ml-1"></i></b></span> 
                    and <b>1 <span class="text-gradient-700">TV<i class="fa-solid fa-tv ml-1"></i></span></b>`,
                    `<span class="text-gradient-700"><b>Bathroom</b> <i class="fa-solid fa-restroom ml-1"></span>`,
                    `<span class="text-gradient-700"><b>Kitchen</b> <i class="fa-solid fa-blender ml-1"></span>` 
                ]
            },
            {
                name: "Kamin",
                images: apartments_images.kamin,
                amenities: [
                    `Has an <span class="text-gradient-700"> <b>air conditioner</b> <i class="fa-solid fa-wind ml-1"></i></span>`,
                    `Has a room with <b>1<span class="text-gradient-700"> double-sized bed<i class="fa-solid fa-bed ml-1"></i></span></b>`, 
                    `Has a living room with <b>2</b> sofas that can transform into 
                    <span class="text-gradient-700"><b>one-sized beds <i class="fa-solid fa-bed ml-1"></i></b></span> 
                    and <b>1 <span class="text-gradient-700">TV<i class="fa-solid fa-tv ml-1"></i></span></b>`,
                    `<span class="text-gradient-700"><b>Bathroom</b> <i class="fa-solid fa-restroom ml-1"></span>`,
                    `<span class="text-gradient-700"><b>Kitchen</b> <i class="fa-solid fa-blender ml-1"></span>` 
                ]
            },
            {
                name: "Smokva",
                images: apartments_images.smokva,
                amenities: [
                    `Has an <span class="text-gradient-700"> <b>air conditioner</b> <i class="fa-solid fa-wind ml-1"></i></span>`,
                    `Has a room with <b>1<span class="text-gradient-700"> double-sized bed<i class="fa-solid fa-bed ml-1"></i></span></b>`, 
                    `Has a living room with <b>2</b> sofas that can transform into 
                    <span class="text-gradient-700"><b>one-sized beds <i class="fa-solid fa-bed ml-1"></i></b></span> 
                    and <b>1 <span class="text-gradient-700">TV<i class="fa-solid fa-tv ml-1"></i></span></b>`,
                    `<span class="text-gradient-700"><b>Bathroom</b> <i class="fa-solid fa-restroom ml-1"></span>`,
                    `<span class="text-gradient-700"><b>Kitchen</b> <i class="fa-solid fa-blender ml-1"></span>` 
                ]
            },
            {
                name: "Azzuro",
                images: apartments_images.azzuro,
                amenities: [
                    `Has an <span class="text-gradient-700"> <b>air conditioner</b> <i class="fa-solid fa-wind ml-1"></i></span>`,
                    `Has a room with <b>1<span class="text-gradient-700"> double-sized bed<i class="fa-solid fa-bed ml-1"></i></span></b>`, 
                    `Has a living room with <b>2</b> sofas that can transform into 
                    <span class="text-gradient-700"><b>one-sized beds <i class="fa-solid fa-bed ml-1"></i></b></span> 
                    and <b>1 <span class="text-gradient-700">TV<i class="fa-solid fa-tv ml-1"></i></span></b>`,
                    `<span class="text-gradient-700"><b>Bathroom</b> <i class="fa-solid fa-restroom ml-1"></span>`,
                    `<span class="text-gradient-700"><b>Kitchen</b> <i class="fa-solid fa-blender ml-1"></span>` 
                ]
            },
            {
                name: "Sole",
                images: apartments_images.sole,
                amenities: [
                    `Has an <span class="text-gradient-700"> <b>air conditioner</b> <i class="fa-solid fa-wind ml-1"></i></span>`,
                    `Has a room with <b>1<span class="text-gradient-700"> double-sized bed<i class="fa-solid fa-bed ml-1"></i></span></b>`, 
                    `Has a living room with <b>2</b> sofas that can transform into 
                    <span class="text-gradient-700"><b>one-sized beds <i class="fa-solid fa-bed ml-1"></i></b></span> 
                    and <b>1 <span class="text-gradient-700">TV<i class="fa-solid fa-tv ml-1"></i></span></b>`,
                    `<span class="text-gradient-700"><b>Bathroom</b> <i class="fa-solid fa-restroom ml-1"></span>`,
                    `<span class="text-gradient-700"><b>Kitchen</b> <i class="fa-solid fa-blender ml-1"></span>` 
                ]
            }
        ]
    }),
	actions: {
        async setRouteParams() {
            this.param = router.currentRoute._value.params.apartment;
            this.apartment = this.apartments.filter(apartment => apartment.name.toLowerCase() == this.param)[0];
        }
    },
});
