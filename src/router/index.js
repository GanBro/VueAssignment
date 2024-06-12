import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Sites from '../pages/Sites.vue';
import History from '../pages/History.vue';
import Events from '../pages/Events.vue';
import Guides from '../pages/Guides.vue';
import Community from '../pages/Community.vue';
import About from '../pages/About.vue';
import SiteDetail from '../pages/SiteDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/sites', component: Sites },
  { path: '/history', component: History },
  { path: '/events', component: Events },
  { path: '/guides', component: Guides },
  { path: '/community', component: Community },
  { path: '/about', component: About },
  { path: '/site/:id', component: SiteDetail },  // 动态路由
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
