<script setup>
import istraSVG from "@/assets/istra.svg"
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
            <img :src="istraSVG" class="rounded-lg h-80">
        </div>
        
    </DZ_Block>
</template>

<script>
export default {
    name: "DZ_Contact"
}
</script>