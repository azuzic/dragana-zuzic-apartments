<script setup>
import istraSVG from "@/assets/istra.svg"
</script>
<template>
    <DZ_Block>
        <div class="relative flex flex-col md:flex-row justify-center items-center w-full gap-8 sm:gap-16">
            <div class="text-teal-950 text-sm text-justify flex flex-col gap-4 font-light">
                <div class="text-4xl text-gradient-900 Sevillana drop-shadow-md">
                    Welcome!
                </div>
                <div>
                    <DZ_a href="https://www.premantura.net/premantura/">Premantura</DZ_a>, 
                    situated just 10 km from Pula, is a charming town nestled in 
                    the southernmost part of Istria. Steeped in history dating back to the 
                    Bronze Age, the town boasts remnants of rustic villas, a testament 
                    to the discerning choice made by ancient Romans in selecting Premantura 
                    as an ideal living space.
                </div>
                <div>
                    What truly sets Premantura apart is the captivating landscape shaped by the magnificent
                    <DZ_a href="https://kamenjak.hr/en"> Kamenjak</DZ_a>
                    peninsula. Stretching 9.5 km in length and up to 1.5 km wide,
                    this natural wonder extends gracefully into the Adriatic Sea, resembling a welcoming arm. 
                    Along its 30 km coastline, Kamenjak embraces numerous inlets and secluded beaches,
                    creating a mesmerizing tapestry of coastal beauty. The crystalline blue-green sea is further
                    adorned by small islands that emerge, enhancing the overall allure of this pristine location.
                </div>
                <div>
                    Discover the timeless charm of Premantura, where history meets natural splendor, and 
                    indulge in the enchanting surroundings that make it a perfect destination for your next 
                    getaway. Explore our apartments and experience the beauty of this coastal haven.
                </div>                
            </div>
            <img :src="istraSVG" class="rounded-lg h-80">
        </div>
        
    </DZ_Block>
</template>

<script>

export default {
    name: "DZ_Welcome",
    components: { }
};
</script>