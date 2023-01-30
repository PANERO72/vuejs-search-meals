<template>
    <div class="flex flex-col p-8 pb-0">
        <h3 class="mb-5 font-bold">{{$t('search-by-name.meals-by-name')}}</h3>
    	<input class="rounded border-2 border-gray-200 w-full" type="search" v-model="keyword" :on-change="searchMeals()" :placeholder="$t('search-input.text-input')" />
  	</div>
    <Meals :meals="meals"></Meals>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

import store from '../store';
import Meals from '../components/Meals.vue'; 
const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals(){
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value);
    } else {
        store.commit('setSearchedMeals', []);
    }
}

onMounted(() => {
    keyword.value = route.params.name;
    if(keyword.value){
        searchMeals();
    }
});
</script>

<style scoped>

</style>