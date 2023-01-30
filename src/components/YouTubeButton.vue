<template>
    <a class="px-2 py-1 rounded border-2 border-red-600 bg-red-500 hover:bg-red-400 hover:text-white transition-colors" :href="href" target="_blank" rel="noopener noreferrer">{{$t('search-by-name.watch-on-youtube')}}</a>
</template>

<script setup>
// export default {
//     name: 'youtube-button'
// }
const props = defineProps({
    href: String
});

</script>

<style scoped>

</style>