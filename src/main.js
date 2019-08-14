import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import PortalVue from 'portal-vue';

import vueHeadful from 'vue-headful';

import firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(PortalVue);
Vue.use(BootstrapVue);
import VueRouter from 'vue-router';
Vue.use(VueRouter);


Vue.component('vue-headful', vueHeadful);

import VueAxios from 'vue-axios';
import axios from 'axios';

const base = axios.create({
  // Para despliege
  baseURL: 'https://appgami.herokuapp.com'
  // Para desarrollo
  // baseURL: 'http://localhost:5000/'
});

firebase.initializeApp({
  apiKey: 'AIzaSyAtGV1ggJO-8AHfXGaSyvhg2SJmON2_rTg',
  authDomain: 'gami-314da.firebaseapp.com',
  databaseURL: 'https://gami-314da.firebaseio.com',
  projectId: 'gami-314da',
  storageBucket: 'gami-314da.appspot.com',
  messagingSenderId: '626672250699',
  appId: '1:626672250699:web:d68f3e0273796b7c'
});

Vue.use(VueAxios, base);

Vue.config.productionTip = false;

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import Perfil from './components/Perfil.vue';
import Registro from './components/Registro.vue';
import InicioSesion from './components/InicioSesion.vue';
import IndexComponentUsuarios from './components/IndexComponentUsuarios.vue';
import Rankings from './components/Rankings.vue';
import Tareas from './components/Tareas.vue';
import PerfilProfesor from './components/PerfilProfesor.vue';
import Juego from './components/h5p/demo/Juego.vue';
import Logros from './components/Logros.vue';
import Tutorial from './components/Tutorial.vue';
import Juegos from './components/Juegos.vue'

import './registerServiceWorker';

const routes = [{
    name: 'Inicio',
    path: '/',
    component: HomeComponent
  },
  {
    name: 'create',
    path: '/create',
    component: CreateComponent
  },
  {
    name: 'posts',
    path: '/posts',
    component: IndexComponent
  },
  {
    name: 'Registro',
    path: '/registro',
    component: Registro
  },
  {
    name: 'Inicio de Sesión',
    path: '/iniciosesion',
    component: InicioSesion
  },
  {
    name: 'Perfil',
    path: '/perfil',
    component: Perfil
  },
  {
    name: 'usuarios',
    path: '/usuarios',
    component: IndexComponentUsuarios
  },
  {
    name: 'Ranking',
    path: '/rankings',
    component: Rankings
  },
  {
    name: 'Actividades',
    path: '/tareas',
    component: Tareas
  },
  {
    name: 'Perfil de profesor',
    path: '/profesor',
    component: PerfilProfesor
  },
  // {
  //   name: 'juego',
  //   path: '/juego',
  //   component: Juego
  // },
  {
    name: 'Logros',
    path: '/logros',
    component: Logros
  },
  {
    name: 'Tutorial',
    path: '/tutorial',
    component: Tutorial
  },
  {
    name: 'Juegos',
    path: '/juegos',
    component: Juegos
  },
  {
    name: 'Juego',
    path: '/juego/:id',
    component: Juego
  }

];

const router = new VueRouter({
  mode: 'history',
  routes: routes
  // history: true,
  // hashbang: false,
  // linkActiveClass: 'active',
  // base: '/',
  // fallback: false, //router should fallback to hash (#) mode when the browser does not support history.pushState

});

router.mode = 'html5'
export default router;

Vue.component('vue-headful', vueHeadful);

// new Vue(
//   Vue.util.extend({
//       router
//     },
//     App
//   )

// ).$mount('#app');

new Vue({
  el: '#app',
  components: {
    App
  },
  template: `<App/>`,
  router
})