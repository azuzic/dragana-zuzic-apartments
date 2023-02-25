<template>
   <div class="bg-slate-900 h-screen w-screen flex bg">
        <div class="lg:basis-1/6 sm:basis-0"></div>

        <div class="flex-grow main px-4">
            <Menu />
            <RouterView />
        </div>

        <div class="lg:basis-1/6 sm:basis-0"></div>
    </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue';

export default {
    components: {
        Menu
    }
}
</script>

<style scoped lang="scss">
.bg {
    background-image: url("src/assets/images/background.jpg");
    background-repeat: repeat;
    background-size: cover;
}
.main {
  background-color: rgba(212, 241, 244, 0.5);
  border-left: solid 1px rgba(128, 171, 176,0.6);
  border-right: solid 1px rgba(128, 171, 176,0.6);
  box-shadow: 0 0 1px rgba(128, 171, 176, 0.2),
              0 0 4px rgba(128, 171, 176, 0.4);
}
</style>