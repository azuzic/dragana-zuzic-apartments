<script setup>
import istraSVG from "@/assets/map2.png"
</script>
<template>
    <DZ_Block>
        <div class="relative flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-16 mt-16">
            <div class="text-teal-950 text-sm flex flex-col gap-3 font-light grow">
                <div class="text-4xl text-gradient-900 drop-shadow-md">
                    Contacts
                </div>
                <DZ_hr i/>  
                <div class="flex gap-2 text-base sm:text-lg font-medium">
                    <div>Name/Surname:</div> <b class="text-gradient-700">Dragana Žužić</b>
                </div>
                <DZ_hr i/>   
                <div class="flex gap-2 text-base sm:text-lg font-medium">
                    <div>Address:</div> <b class="text-gradient-700">Krše 81, 52100 Premantura, Croatia</b>
                </div>   
                <DZ_hr i/>    
                <div class="flex gap-2 text-base sm:text-lg font-medium">
                    <div>Tel:</div> <b class="text-gradient-700">+385 52 575 430</b>
                </div>  
                <DZ_hr i/>  
                <div class="flex gap-2 text-base sm:text-lg font-medium">
                    <div>Cell/Viber/WhatsApp:</div> <b class="text-gradient-700">+385 98 183 66 16</b>
                </div>    
                <DZ_hr i/>   
                <div class="flex gap-2 text-base sm:text-lg font-medium">
                    <div>E-mail:</div> <b class="text-gradient-700">draga.zuzic@gmail.com</b>
                </div>   
                <DZ_hr i/>                
            </div>
            <a target="_blank" href="https://www.google.com/maps/dir//Apartments+Premantura+Dragana/@44.8014876,13.9131222,20.17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x0:0xba654c930e9c630a!2m2!1d13.9133919!2d44.8014298!3e3?entry=ttu">
                <img :src="istraSVG" class="rounded-lg h-80 hover:scale-105 transition-300">
            </a>
        </div>
        
    </DZ_Block>
    
    <DZ_Block>
        <div class="relative flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-16 mt-16">
            <div class="text-teal-950 text-sm flex flex-col gap-3 font-light grow">
                <div class="text-4xl text-gradient-900 drop-shadow-md">
                    How to get to Premantura
                </div>
                <DZ_hr i/>  
                <div class="flex flex-col gap-2 text-base sm:text-lg font-medium">
                    <div>
                        Premantura location:
                    </div>
                    <div class="text-sm">
                        Premantura is situated in the southermost tip of the peninsulla of 
                        Istria in Croatia. The most common way to get to Premantura is by car, 
                        but its aslo possible to come by bus. Becasue its specific possition 
                        as the top end south spot, its pretty easy to find Premantura.
                        <br> <br>
                        Premantura location GPS kooridates: <b>44.8031486, 13.9126786</b>
                    </div>
                    <div>
                        You can get to Premantura by plane: <b>Pula International Airport (PUY)</b>
                        <br>
                        You can get to Premantura by bus: <b>Premantura bus lines 27 and 28 Schedule</b>
                    </div>
                    <div>
                        You can get to Premantura by car:
                    </div>
                    <div class="text-sm">
                        When You enter in Croatia, You must go to Istria direction. Istria is 
                        biggest Croatian peninsulla and its located on the west side of Croatia. 
                        When you come in Istria just drive to the south. The most commom way of 
                        arriving to Premantura is to take a A8 & A9 highway and follow the 
                        directions via: Pula - Medulin - Pomer - Premantura. There is a verry good 
                        traffic signalisation on the highway so there is a small chance to get lost. 
                        When You exit from the A9 highway just follow the road directions as said above: 
                        Medulin - Pomer - Premantura.
                        <br><br>
                        Note: If You are coming by the A9 highway, do not turn in the Pula city direction
                        beacuse You will finish in the city of Pula and that the harder possible way to
                        get to Premantura. On Pula highway turnower, just continue driving to the south.
                    </div>
                </div>         
            </div>
        </div>
        
    </DZ_Block>
</template>

<script>
export default {
    name: "DZ_Contact"
}
</script>