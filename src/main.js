import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import './assets/sass/style.scss';

import routes from './routes';
import './global';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
