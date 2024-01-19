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

<style>
  .pagination-container {
    display: flex;
    column-gap: 10px;
  }
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(242, 242, 242);
    border: 1px solid rgb(217, 217, 217);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
</style>