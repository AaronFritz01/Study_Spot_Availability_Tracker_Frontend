import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CampusMapView from "../views/CampusMapView.vue";
import StudySpacesView from "../views/StudySpacesView.vue";
import StatisticsView from "../views/StatisticsView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/About",
            name: "about",
            component: AboutView,
        },
        {
            path: "/Campus_Map",
            name: "campus_map",
            component: CampusMapView,
        },
        {
            path: "/Study_Spaces",
            name: "study_spaces",
            component: StudySpacesView,
        },
        {
            path: "/Statistics",
            name: "statistics",
            component: StatisticsView,
        },
        {
            path: "/Contact",
            name: "contact",
            component: ContactView,
        },
    ],
});


export default router;