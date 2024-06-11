import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Site1 from '../pages/Site1.vue';
import Site2 from '../pages/Site2.vue';
import Site3 from '../pages/Site3.vue';
import Site4 from '../pages/Site4.vue';
import Site5 from '../pages/Site5.vue';
import Site6 from '../pages/Site6.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/site1', component: Site1 },
  { path: '/site2', component: Site2 },
  { path: '/site3', component: Site3 },
  { path: '/site4', component: Site4 },
  { path: '/site5', component: Site5 },
  { path: '/site6', component: Site6 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
