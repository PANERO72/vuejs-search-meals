<template>
    <header class="bg-white shadow h-16 flex justify-between items-strech">
		<h3>Login</h3>
        <LanguageSwitcher></LanguageSwitcher>
	</header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';
export default {
    name: 'login-register-layout', components: {LanguageSwitcher}
}
</script>

<style scoped>

</style>