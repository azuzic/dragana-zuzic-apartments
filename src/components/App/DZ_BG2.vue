<script setup>
import blockSVG from "@/assets/background/block.svg"
import blockSVG2 from "@/assets/background/block2.svg"
</script>
<template>
    <img :src="blockSVG" class="absolute wh-full left-0 opacity-90 -z-10">  
    <img :src="blockSVG2" class="w-full h-[110%] left-0 opacity-90 -z-10"
    :class="scrolled ? 'fixed top-0' : 'absolute top-[100%]'">  
    <img :src="blockSVG2" class="absolute top-[100%] w-full h-[110%] left-0 opacity-0 -z-10">  
</template>
<script>
export default {
    name: "DZ_BG2",
    data() {
        return {
            scrolled: false
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
	methods: {
		handleScroll() {
			const scrollPosition = window.scrollY;
			if (!window.mobileCheck()) this.scrolled = scrollPosition > 1028;
			else this.scrolled = scrollPosition > 1028;
		},
	},
}
</script>