import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store'
import VueEasyLightbox from 'vue-easy-lightbox'


createApp(App).use(router).use(VueEasyLightbox).use(store).mount('#app');
