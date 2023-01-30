<template>
    <div class="flex flex-col p-8 pb-0 mb-4" v-if="route.name === 'byIngredient'">
        <h3 class="mb-5 font-bold">{{$t('search-by-ingredients.meal-by-ingredients')}}</h3>
    </div>
    <div class="flex flex-col p-8 pb-0" v-show="!route.name === 'home'">
    </div>
    <div class="flex flex-col p-8 pb-0" v-show="route.name === 'byName'">
    </div>
    <div class="flex flex-col p-8 pb-0" v-show="route.name === 'byLetter'">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 pt-0">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"></MealItem>
    </div>
    <div v-if="!meals.length" class="flex justify-center text-gray-600">
        <p>{{$t('search-by-ingredients.not-meals-to-display')}}</p>
    </div>
</template>

<script setup>
import MealItem from '../components/MealItem.vue';
import { useRoute } from 'vue-router';
import { watchEffect } from 'vue';

const route = useRoute();

const {meals} = defineProps({
    meals: {
        required: true, type: Array
    }
});

watchEffect(() => {
    console.log(route.params)
   
});
</script>

<style scoped>

</style>