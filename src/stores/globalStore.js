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
                    `
                    <div class="amenities">
                        <i class="fas fa-home"></i> Apartment Terasa - 45m<sup>2</sup><br>
                        <i class="fas fa-bed"></i> 1 Bedroom with Double Bed (180*200cm)<br>
                        <i class="fas fa-couch"></i> Living Room with sofa with one normal bed<br>
                        <i class="fas fa-utensils"></i> Kitchen with big refrigerator/freezer<br>
                        <i class="fas fa-bath"></i> Bathroom<br>
                        <i class="fas fa-tv"></i> TV-SAT<br>
                        <i class="fas fa-snowflake"></i> Air Conditioner<br>
                        <i class="fas fa-chalkboard"></i> Big Terrace - 25m<sup>2</sup>, 1st floor, separate entrance<br>
                        <i class="fas fa-car"></i> Parking Place
                    </div>
                    ` 
                ]
            },
            {
                name: "Kamin",
                images: apartments_images.kamin,
                amenities: [
                    `
                    <div class="amenities">
                        <i class="fas fa-home"></i> Apartment Kamin - 30m<sup>2</sup><br>
                        <i class="fas fa-bed"></i> 1 Living Bedroom with Double Bed (160*200cm) and sofa <br>
                        <i class="fas fa-utensils"></i> Kitchen with big refrigerator/freezer<br>
                        <i class="fas fa-bath"></i> Bathroom<br>
                        <i class="fas fa-tv"></i> TV-SAT<br>
                        <i class="fas fa-snowflake"></i> Air Conditioner<br>
                        <i class="fas fa-chalkboard"></i> Big Terrace - 20m<sup>2</sup>, ground floor, separate entrance<br>
                        <i class="fas fa-car"></i> Parking Place
                    </div>
                    ` 
                ]
            },
            {
                name: "Smokva",
                images: apartments_images.smokva,
                amenities: [
                    `
                    <div class="amenities">
                        <i class="fas fa-home"></i> Apartment Smokva - 45m<sup>2</sup><br>
                        <i class="fas fa-bed"></i> 1 Bedroom with Double Bed (180*200cm)<br>
                        <i class="fas fa-bed"></i> 1 Bedroom with 2 separate beds (90*200cm)<br>
                        <i class="fas fa-utensils"></i> Kitchen with big refrigerator/freezer<br>
                        <i class="fas fa-bath"></i> Bathroom<br>
                        <i class="fas fa-tv"></i> TV-SAT<br>
                        <i class="fas fa-snowflake"></i> Air Conditioner<br>
                        <i class="fas fa-chalkboard"></i> Big Terrace - 20m<sup>2</sup>, ground floor, separate entrance<br>
                        <i class="fas fa-car"></i> Parking Place
                    </div>
                    ` 
                ]
            },
            {
                name: "Azzuro",
                images: apartments_images.azzuro,
                amenities: [
                    `
                    <div class="amenities">
                        <i class="fas fa-home"></i> Apartment Azzuro - 40m<sup>2</sup><br>
                        <i class="fas fa-bed"></i> 1 Bedroom with Double Bed (160*200cm)<br>
                        <i class="fas fa-couch"></i> Living Room with sofa<br>
                        <i class="fas fa-utensils"></i> Kitchen with big refrigerator/freezer<br>
                        <i class="fas fa-bath"></i> Bathroom<br>
                        <i class="fas fa-tv"></i> TV-SAT<br>
                        <i class="fas fa-snowflake"></i> Air Conditioner<br>
                        <i class="fas fa-chalkboard"></i> Big Terrace - 12m<sup>2</sup>, ground floor, separate entrance<br>
                        <i class="fas fa-car"></i> Parking Place
                    </div>
                    ` 
                ]
            },
            {
                name: "Sole",
                images: apartments_images.sole,
                amenities: [
                    `
                    <div class="amenities">
                        <i class="fas fa-home"></i> Apartment Sole - 35m<sup>2</sup><br>
                        <i class="fas fa-bed"></i> 1 Living Bedroom with Double Bed (160*200cm) <br>
                        <i class="fas fa-utensils"></i> Kitchen with big refrigerator/freezer<br>
                        <i class="fas fa-bath"></i> Bathroom<br>
                        <i class="fas fa-tv"></i> TV-SAT<br>
                        <i class="fas fa-snowflake"></i> Air Conditioner<br>
                        <i class="fas fa-chalkboard"></i> Big Terrace - 8m<sup>2</sup>, ground floor, separate entrance<br>
                        <i class="fas fa-car"></i> Parking Place
                    </div>
                    ` 
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
