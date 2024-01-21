<script setup>
import istraSVG from "@/assets/map2.png"
</script>
<template>
    <DZ_Block>
        <div class="relative flex flex-col lg:flex-row justify-center items-center w-full gap-8 sm:gap-16">
            <div class="text-teal-950 text-sm text-justify flex flex-col gap-4 font-light">
                <div class="text-4xl text-gradient-900 Sevillana drop-shadow-md">
                    Welcome!
                </div>
                <div>
                    <DZ_a href="https://www.premantura.net/premantura/">Premantura</DZ_a>, 
                    situated just 10 km from Pula with its historic Roman Amphitheatre and St. Augustus' Temple, is a charming town nestled in 
                    the southernmost part of Istria. 
                </div>
                <div>
                    What truly sets Premantura apart is the captivating landscape shaped by the magnificent
                    <DZ_a href="https://kamenjak.hr/en"> Kamenjak</DZ_a>
                    peninsula. Consisted of more than 30 km of coastline with crystal blue sea,
                    numerous coves and amazing beaches declared by the world famous tourist guide 
                    Lonely Planet as one of the Top 10 Beaches on Mediterranean.                    
                </div>
                <div>
                    <p>
                        <b>Discover the timeless charm of Premantura,</b> where history meets natural splendor. 
                        Indulge in the enchanting surroundings that make it a perfect destination for your next getaway. 
                        Explore our apartments and experience the beauty of this coastal haven.
                    </p>
                    <br>
                    <p>
                        <b>Premantura is a unique destination with a beach designed for 
                        blind people</b>. The town itself is well-equipped to satisfy the needs of every guest.
                        Numerous shops offer a variety of groceries, eliminating the need to travel to 
                        larger towns for shopping. Fresh bread and other products are available 
                        daily from several bakeries.
                    </p>
                    <br>
                    <p>
                        The small market place provides a diverse selection of fresh fruits and vegetables. 
                        In the town center, you'll find an exchange office <i class="fas fa-exchange-alt"></i> , 
                        ATM machine <i class="fas fa-credit-card"></i> , and easy access to the internet at an 
                        internet cafe <i class="fas fa-coffee"></i>. Specialized shops offer 
                        <span style="font-style: italic;">postcards, wall posters, and souvenirs</span>. 
                        Premantura boasts several <i class="fas fa-ice-cream"></i> ice cream shops, 
                        bars <i class="fas fa-cocktail"></i>, and a night club <i class="fas fa-music"></i>.
                        For those who prefer eco-friendly transportation, bike <i class="fas fa-bicycle"></i>
                        and quad-bike <i class="fas fa-motorcycle"></i> rentals are available. Additionally, 
                        small motor boats <i class="fas fa-ship"></i> and various rowing boats <i class="fas fa-ship"></i>  
                        can be rented for exploring the coastal waters.
                    </p>
                    <br>
                    <p>
                        Immerse yourself in the local culture by participating in the numerous 
                        <span style="text-decoration: underline;">tourist and folk festivals</span> 
                        in Premantura. Two noteworthy celebrations include <b>Fešta od Raki</b> 
                        around May 1st and the most important feast in Premantura, <b>Lovrečevo feast 
                        (August 10)</b>, honoring St. Lovre <i class="fas fa-church"></i>, the 
                        patron of Premantura. This small village has much to offer, ensuring a 
                        <i>peaceful and relaxing</i> holiday in Istria, Croatia.
                    </p>
                </div>            
            </div>            
            <img :src="istraSVG" class="rounded-lg w-96 hover:scale-105 transition-300 cursor-pointer" @click="redirectToGoogle">
        </div>
        
    </DZ_Block>
</template>

<script>

export default {
    name: "DZ_Welcome",
    components: { },
    methods: {
        redirectToGoogle() {
            window.open("https://www.google.com/maps/dir//Apartments+Premantura+Dragana/@44.8014876,13.9131222,20.17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x0:0xba654c930e9c630a!2m2!1d13.9133919!2d44.8014298!3e3?entry=ttu", "_blank");
                
        },
    },
};
</script>