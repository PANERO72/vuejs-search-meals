<template>
    <div class="mx-auto mt-6 ">
        <div class="text-center">
            <h1 class="text-3xl ">{{$t("meals-details.page-title")}}</h1>
        </div>
        <div class="max-w-[800px] mx-auto p-8">
            <h3 class="text-2xl mb-3">{{$t("meals-details.meal-name")}} &nbsp;{{ meal.strMeal }}</h3>
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]" width="800" />
            <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py2 justify-start">
                <div><strong class="text-bold">{{$t("meals-details.meal-category")}}</strong>&nbsp; {{ meal.strCategory }}</div>
                <div><strong class="text-bold">{{$t("meals-details.meal-country")}}</strong>&nbsp; {{ meal.strArea }}</div>
                <div><strong class="text-bold">{{$t("meals-details.meal-tags")}}</strong>&nbsp; {{ meal.strTags }}</div>
            </div>
            <div class="my-3 text-justify">
                <strong class="text-bold text-lg">{{$t("meals-details.meal-instructions")}}</strong>&nbsp;{{ meal.strInstructions }}
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div>
                    <h2 class="text-2xl font-semibold mb-3">{{$t("meals-details.meal-ingredients")}}</h2>
                    <ul>
                        <template v-for="(el, indIngredient) of new Array(20)" :key="indIngredient">
                            <li v-if="meal[`strIngredient${indIngredient + 1}`]">
                               {{ indIngredient + 1 }} . {{ meal[`strIngredient${indIngredient + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-3">{{$t("meals-details.meal-measures")}}</h2>
                    <ul>
                        <template v-for="(el, ind) of new Array(20)" :key="ind">
                            <li v-if="meal[`strMeasure${ind + 1}`]">
                                <!-- {{ ind + 1 }} . {{ meal[`strMeasure${ind + 1}`] }} -->
                                {{ meal[`strMeasure${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="mt-6">
                    <YouTubeButton :href="meal.strYoutube"></YouTubeButton>
                    <a class="px-2 py-1 rounded border-2 border-blue-600 bg-blue-500 hover:bg-blue-400 hover:text-white transition-colors ml-5" :href="meal.strSource" target="_blank" rel="noopener noreferrer">{{$t('search-by-name.view-source')}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`).then(({data}) => {
        meal.value = data.meals[0] || {};
    });
});
</script>

<style scoped>

</style>