import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

//GLOBAL COMPONENTS
import DZ_Footer from '@/components/Global/DZ_Footer.vue';
import DZ_Block from '@/components/Global/DZ_Block.vue';
import DZ_hr from '@/components/Global/DZ_hr.vue';
import DZ_a from '@/components/Global/DZ_a.vue';

//GLOBAL STORES
import { createPinia } from "pinia";

//GLOBAL STYLE
import "./style.css";

//PINIA AND VUE
const pinia = createPinia();
const app = createApp(App);

app.component('DZ_Footer', DZ_Footer)
app.component('DZ_Block', DZ_Block)
app.component('DZ_hr', DZ_hr)
app.component('DZ_a', DZ_a)

app.use(router);
app.use(pinia);

app.mount("#app");