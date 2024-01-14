<template>
    <div v-if="mail">
        <a href="mailto:draga.zuzic@gmail.com">
            <div class="w-full sm:w-fit h-fit bg-gradient-900 rounded-lg drop-shadow-xl px-12 py-6 my-8 sm:my-32 text-xl sm:text-3xl text-center
                hover:scale-105 brightness-100 hover:brightness-125 transition-300 cursor-pointer">
                <span class="font-light text-gradient-100">
                    Reservation request on e-mail: <span class="font-medium">draga.zuzic@gmail.com</span>
                </span>
            </div>
        </a>
    </div>
    <u v-else-if="href || link" class="text-teal-700 hover:text-opacity-25 text-opacity-50 font-medium">
        <a v-if="href" :href="href" target="_blank" :class="light ? 'text-gradient-200 hover:text-gradient-400' : 
            'text-gradient-800 hover:text-gradient-600'">
            <slot></slot>
        </a>
        <router-link v-if="link" :to="link" :class="light ? 'text-gradient-200 hover:text-gradient-400' : 
            'text-gradient-800 hover:text-gradient-600'">
            <slot></slot>
        </router-link>
    </u>     
    <span v-else class="text-opacity-50 font-medium" :class="light ? 'text-gradient-200' : 
        'text-gradient-800'">
        <slot></slot>
    </span>
</template>
<script>
export default {
    name: "DZ_a",
    props: { href: String, link: String, light: Boolean, mail: Boolean }
}
</script>