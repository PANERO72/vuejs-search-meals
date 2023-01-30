import { createRouter, createWebHistory } from "vue-router";
import MainLayout from '../components/MainLayout.vue';
import LoginRegisterLayout from '../components/LoginRegisterLayout.vue';
import Home from '../views/Home.vue';
import MealsIngredients from '../views/MealsIngredients.vue';
import SearchMealsByIngredient from '../views/SearchMealsByIngredient.vue';
import SearchMealsByLetter from '../views/SearchMealsByLetter.vue';
import SearhMealsByName from '../views/SearchMealsByName.vue';
import MealDetails from '../views/MealDetails.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
    {path: '/', component: MainLayout, redirect: 'home', children: [
        {path: '/home', name: 'home', component: Home },
        {path: '/by-name/:name?', name: 'byName', component: SearhMealsByName},
        {path: '/by-letter/:letter?', name: 'byLetter', component: SearchMealsByLetter},
        {path: '/ingredients', name: 'ingredients', component: MealsIngredients},
        {path: '/by-ingredient/:ingredient', name: 'byIngredient', component: SearchMealsByIngredient},
        {path: '/meal-deatails/:id?', name: 'mealDetails', component: MealDetails}
    ]},
    {path: '/auth', component: LoginRegisterLayout },
    {path: '/:pathMatch(.*)*', name: 'page-no-found', component: PageNotFound}
];

const router = createRouter({history: createWebHistory(), routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',});

export default router;