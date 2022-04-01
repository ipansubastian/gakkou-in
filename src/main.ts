/* eslint-disable @typescript-eslint/no-var-requires */
import App from './App.vue';
import router from './router';
import store from './store';
import Slick from 'vue-slick';
import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'slick-carousel/slick/slick-theme.scss';
import './assets/css/global.scss';
import 'slick-carousel/slick/slick.scss';
import './registerServiceWorker';

// cjs import method
const {library} = require('@fortawesome/fontawesome-svg-core')
const {faArrowLeft, faArrowRight} = require('@fortawesome/free-solid-svg-icons')

library.add(faArrowLeft)
library.add(faArrowRight)

const app = createApp(App).use(store).use(router);
app.mount('#app');
app.component('Slick', Slick);
app.component('FontAwesomeIcon', FontAwesomeIcon)
