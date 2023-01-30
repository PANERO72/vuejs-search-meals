<template>
    <div class="flex flex-col p-8 pb-0">
        <h3 class="mb-5 font-bold">{{$t('meals-by-ingredients.meals-by-ingredients')}}</h3>
        <input class="rounded border-2 border-gray-200 w-full" type="search" v-model="keyword" :placeholder="$t('search-input.text-input')" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 pt-0 mt-5">
        <div v-for="ingredient of computedIngredients" :key="ingredient.idIngredient" class="bg-white rounded shadow p-5">
            <div class="flex justify-between">
                <h3 class="font-bold text-1xl mb-2">{{ ingredient.strIngredient }}</h3>
                <h5>{{ ingredient.strType }}</h5>
            </div>
            <hr />
            <div>
                <p class="mt-3">{{ ingredient.strDescription }}</p>
            </div>
            <div class="flex justify-end mt-4">
                <router-link :to="{name: 'byIngredient', params: {ingredient: ingredient.strIngredient}}" class="px-2 py-1 rounded border-2 border-green-600 bg-green-500 hover:bg-green-400 hover:text-white transition-colors">{{$t('meals-by-ingredients.see-more-link')}}</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

const keyword = ref("");
const ingredients = ref([]);
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
    axiosClient.get('list.php?i=list').then(({data}) => {
        ingredients.value = data.meals;
    });
});
</script>

<style scoped>

</style>