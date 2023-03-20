import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from '../views/About.vue';
import BrowseImages from '../views/Browse.vue';

const routes = [
  {
    path: '/',
    name: 'FrontPage',
    component: FrontPage,
  },
  {
    path: '/browse-images',
    name: 'BrowseImages',
    component: BrowseImages,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
