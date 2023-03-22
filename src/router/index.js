import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from '../views/About.vue';
import BrowseImages from '../views/Browse.vue';
import UploadImages from '../views/Upload.vue';
import ViewImage from '../components/ViewImage.vue';

const routes = [
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/',
    name: 'BrowseImages',
    component: BrowseImages,
  },
  {
    path: '/upload',
    name: 'UploadImages',
    component: UploadImages
  },
  {
    path: '/view/:index',
    name: 'ViewImage',
    component: ViewImage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
