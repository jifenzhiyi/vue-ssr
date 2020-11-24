import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../views/Home.vue') },
      { path: '/about', component: () => import('../views/About.vue') },
    ],
  });
}

export default createRouter;
