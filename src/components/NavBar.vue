<template>
    <header class="bg-white shadow h-16 flex justify-between items-strech">
		<router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">{{ $t("menu.home") }}</router-link>
		<div class="flex items-center gap-1">
			<router-link :to="{name: 'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">{{ $t("menu.search-meals") }}</router-link>
			<router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">{{ $t("menu.meals-by-letter")}}</router-link>
			<router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">{{ $t("menu.meals-by-ingredients")}}</router-link>
		</div>
		<LanguageSwitcher></LanguageSwitcher>
	</header>
</template>

<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
export default {
    name: 'navbar',
	components: { LanguageSwitcher }
}
</script>

<style scoped>
.active-link {
    color: #42b983;
	pointer-events: none;
	font-weight: bold;
}

.exact-active-link {
    color: #42b983;
    font-weight: bold;
}
</style>