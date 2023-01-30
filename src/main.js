import { createApp } from 'vue';
import { createI18n } from "vue-i18n";
import router from './router';
import store from './store';
import './style.css';
import App from './App.vue';

import ca from './locales/ca.json';
import es from './locales/es.json';
import en from './locales/en.json';
import de from './locales/de.json';

// configure i18n
const i18n = createI18n({
    locale: "es",
    fallbackLocale: "ca",
    messages: { ca, en, es, de }
  });

const app = createApp(App)

app.use(router).use(store).use(i18n).mount('#app');