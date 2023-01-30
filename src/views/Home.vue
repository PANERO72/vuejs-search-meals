<template>
    <div class="flex flex-col p-8 pb-0">
		<h3 class="mb-5 font-bold">{{$t('home-page.radom-meals-title')}}</h3>
  	</div>
    <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js';
import Meals from "../components/Meals.vue";

// const meals = computed(() => store.state.meals)
const meals = ref([]);

// const ingredients = ref([]);

onMounted(async () => {
    // const response = await axiosClient.get('/list.php?i=list');
    // console.log(response.data);
    // ingredients.value = response.data;

    for (let i = 0; i < 20; i++) {
        const response = await axiosClient.get(`random.php`).then(({data}) => meals.value.push(data.meals[0]));
        console.log(response);
    }
});

</script>

<style scoped>

</style>