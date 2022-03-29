import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/css/global.scss';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// import 'swiper/swiper-bundle.min.css';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const VueAgile = require('vue-ag');

createApp(App).use(store).use(router).mount('#app');
