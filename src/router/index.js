import { createRouter, createWebHistory } from "vue-router";
import DZ_HomeView from "@/views/DZ_HomeView.vue";
import DZ_ApartmentsView from "@/views/DZ_ApartmentsView.vue";
import DZ_ApartmentView from "@/views/DZ_ApartmentView.vue";
import DZ_ContactView from "@/views/DZ_ContactView.vue";
import DZ_FAQView from "@/views/DZ_FAQView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/home",
			name: "Home",
			component: DZ_HomeView,
		},
		{
			path: "/apartments",
			name: "Apartments",
			component: DZ_ApartmentsView,
		},
		{
			path: "/apartments/:apartment",
			name: "Apartment",
			component: DZ_ApartmentView,
            props: route => ({ apartment: route.params.apartment }),
		},
		{
			path: "/contact",
			name: "Contact",
			component: DZ_ContactView,
		},
		{
			path: "/faq",
			name: "FAQ",
			component: DZ_FAQView,
		},
		{
			path: "/about-us",
			name: "About us",
			component: DZ_HomeView,
		},
	],
});

router.beforeEach(async (to, from, next) => {
    const publicPages = [
        "/home",
        "/apartments",
        "/apartments/terasa",
        "/apartments/kamin",
        "/apartments/smokva",
        "/apartments/azzuro",
        "/apartments/sole",
        "/contact",
        "/faq",
        "/about-us",
    ];
    const apartments = [
        "terasa",
        "kamin",
        "smokva",
        "azzuro",
        "sole",
    ];
    if (publicPages.includes(to.path)) next();
    else next("/home");
});

export default router;