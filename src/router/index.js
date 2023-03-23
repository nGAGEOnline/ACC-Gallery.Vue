import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import BrowsePage from '../views/BrowsePage.vue';
import UploadPage from '../views/UploadPage.vue';
import ImageViewer from '../components/ImageViewer.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

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
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Redirect to home page if path is invalid
  if (to.matched.length === 0) {
    next({ name: 'HomePage' });
  } else {
    next();
  }
});

export default router;
