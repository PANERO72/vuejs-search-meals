<template>
    <div class="bg-gray-100">
        <nav-bar></nav-bar>
        <main>
            <router-view></router-view>
        </main>
	</div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
  components: { NavBar },
    name: 'main-layout'
}
</script>

<style scoped>

</style>