<template>
    <div class="bg-gray-200 text-center h-full">
        <div class="p-t-100 mb-10">
            <h1 class="text-5xl text-red-500 mb-5">¡Vaya, Error 404!</h1>
            <h1 class="text-5xl text-red-500">¡Página no Encontrada!</h1>
        </div>
        <router-link class="boton p-2 bg-blue-500 rounded hover:bg-blue-400 transition-colors" to="/">Volver a Inicio</router-link>
    </div>
</template>

<script>
export default {
    name: 'page-not-found'
}
</script>

<style scoped>
.p-t-100 {
    padding-top: 300px;
}
.boton {
    position: relative;
    margin-top: 50px;
}
</style>