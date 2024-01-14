<template>
	<div class="relative wh-full | transition-300 | Poppins text-slate-200">

		<DZ_BG/>
        <DZ_Title/>
        <DZ_Menu/>
        <DZ_Carousel/>

		<div class="min-h-full flex flex-col-reverse absolute w-full">
            <DZ_BG2/>

			<router-view class="" v-slot="{ Component, route }">
				<transition name="fade">
					<component
						class="absolute wh-full"
						:is="Component"
						:key="route.path" /> 
				</transition>
			</router-view>

		</div>

	</div>
</template>

<script>
import DZ_BG from '@/components/App/DZ_BG.vue';
import DZ_BG2 from '@/components/App/DZ_BG2.vue';
import DZ_Title from '@/components/App/DZ_Title.vue';
import DZ_Menu from "@/components/App/DZ_Menu.vue";
import DZ_Carousel from '@/components/App/DZ_Carousel.vue';

export default {
    name: "App",
    components: { DZ_BG, DZ_BG2, DZ_Title, DZ_Menu, DZ_Carousel }
};
</script>