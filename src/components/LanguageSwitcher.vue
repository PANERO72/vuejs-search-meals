<template>
  <div class="my-3">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code">
        {{ lang.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "language-switcher",
  data() {
    return {
      langs: [
        { code: "ca", text: "Catalá"},
        { code: "en", text: "English" },
        { code: "es", text: "Español" },
        { code: "de", text: "Deutsch" },
      ],
    };
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
