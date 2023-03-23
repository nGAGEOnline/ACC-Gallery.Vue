import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import BrowsePage from '../views/BrowsePage.vue';
import UploadPage from '../views/UploadPage.vue';
import ImageViewer from '../components/ImageViewer.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/browse',
    name: 'BrowsePage',
    component: BrowsePage,
  },
  {
    path: '/upload',
    name: 'UploadPage',
    component: UploadPage
  },
  {
    path: '/viewer/:id',
    name: 'ImageViewer',
    component: ImageViewer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
