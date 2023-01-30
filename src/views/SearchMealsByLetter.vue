<template>
    <div class="flex flex-col p-8 pb-0">
        <h3 class="mb-5 font-bold">{{$t('search-by-letter.meals-by-letter')}}</h3>
    </div>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter" class="transition-colors hover-letter">
            {{ letter }}
        </router-link>
	</div>
    <Meals :meals="meals"></Meals>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter);
});

onMounted(() => {
    store.dispatch('searchMealsByLetter', route.params.letter);
});
</script>

<style scoped>
.hover-letter:hover{
    text-decoration: underline;
    color: green;
}
</style>