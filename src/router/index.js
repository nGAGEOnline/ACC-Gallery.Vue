import { createRouter, createWebHistory } from 'vue-router';
import FrontPage from '../components/FrontPage.vue';
import BrowseImages from '../components/BrowseImages.vue';

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
