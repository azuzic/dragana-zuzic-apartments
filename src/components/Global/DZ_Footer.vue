<template>
    <div class="relative bg-gradient-950 w-full p-DZ drop-shadow-lg z-10 text-xs">
        <div class="p-4 h-fit gap-4 flex-center-full flex-wrap justify-around">
            <div class="flex flex-col py-2 gap-1 h-full">
                <span class="mb-4 text-base font-medium">Links:</span>
                <DZ_a light link="/home"><i class="fa-solid fa-house-chimney mr-2"></i>Home </DZ_a>
                <DZ_a light link="/faq"><i class="fa-solid fa-circle-question mr-2"></i>FAQ </DZ_a>
                <DZ_a light link="/contact"><i class="fa-solid fa-circle-info mr-2"></i>Contact </DZ_a>
            </div>
            <div class="flex flex-col py-2 gap-1 h-full">
                <span class="mb-4 text-base font-medium">Contact:</span>
                <DZ_a light><i class="fa-solid fa-envelope mr-2"></i>draga.zuzic@gmail.com</DZ_a>
                <DZ_a light><i class="fa-brands fa-whatsapp mr-2"></i>+385 98 183 66 16 </DZ_a>
                <DZ_a light><i class="fa-solid fa-phone mr-2"></i>+385 52 575 430 </DZ_a>
            </div>
            <div class="flex flex-col py-2 gap-1 h-full">
                <span class="mb-4 text-base font-medium">Made by:</span>
                <DZ_a light href="https://github.com/azuzic"><i class="fa-brands fa-github mr-2"></i>Alesandro Žužić </DZ_a>
                <DZ_a light>@{{ new Date().getFullYear() }} All rights reserved </DZ_a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DZ_Footer"
}
</script>