require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import BootstrapVue from 'bootstrap-vue';

import router from './Router/index'
import store from './Store/index';
import App from './App.vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App }
});
