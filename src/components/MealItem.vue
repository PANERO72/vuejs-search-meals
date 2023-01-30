<template>
    <div class="bg-white shadow rounded-xl">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-80 object-cover" />
        <div class="flex justify-between p-3 font-semibold">
            <h3>{{$t('search-by-name.meal-name')}} {{ meal.strMeal }}</h3>
            <h5 v-if="meal.strArea">{{$t('search-by-name.meal-country')}} {{ meal.strArea }}</h5>
        </div>
        <div class="p-3 text-sm"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum facilis omnis eos officiis tenetur.</p></div>
        <div class="flex p-3 justify-between">
            <YouTubeButton v-if="meal.strYoutube" :href="meal.strYoutube"></YouTubeButton>
            <a class="px-2 py-1 rounded border-2 border-blue-600 bg-blue-500 hover:bg-blue-400 hover:text-white transition-colors" :href="meal.strSource" target="_blank" rel="noopener noreferrer" v-if="meal.strSource">{{$t('search-by-name.view-source')}}</a>
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="px-2 py-1 rounded border-2 border-green-600 bg-green-500 hover:bg-green-400 hover:text-white transition-colors">{{$t('search-by-name.view-details')}}</router-link>
        </div>
    </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue';
const {meal} = defineProps({
    meal: {
        required: true, type: Object 
    } 
});
</script>

<style scoped>

</style>