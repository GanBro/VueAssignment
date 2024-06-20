import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import About from '../pages/About.vue';
import Landmarks from '../pages/Landmarks.vue';
import Nature from '../pages/Nature.vue';
import ReligionFolklore from '../pages/ReligionFolklore.vue';
import Culture from '../pages/Tickets.vue';
import Festivals from '../pages/Festivals.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: About },
  { path: '/landmarks', component: Landmarks },
  { path: '/nature', component: Nature },
  { path: '/religionFolklore', component: ReligionFolklore },
  { path: '/culture', component: Culture },
  { path: '/festivals', component: Festivals },
  { path: '/site/:id', component: Festivals },  // 动态路由，假设是详情页面
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
