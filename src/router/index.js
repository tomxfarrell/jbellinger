import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Portfolio' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/WorkView.vue'),
      meta: { title: 'Work' },
    },
    {
      path: '/work/elit-pristine-water-series',
      name: 'elit-pristine-water-series',
      component: () => import('../views/work/ElitePristineView.vue'),
      meta: { title: 'Elit Pristine Water Series' },
    },
    {
      path: '/work/harley-davidson',
      name: 'harley-davidson',
      component: () => import('../views/work/HarleyDavidsonView.vue'),
      meta: { title: 'Harley-Davidson' },
    },
    {
      path: '/work/versace',
      name: 'versace',
      component: () => import('../views/work/VersaceView.vue'),
      meta: { title: 'Versace' },
    },
    {
      path: '/work/budweiser',
      name: 'budweiser',
      component: () => import('../views/work/BudweiserView.vue'),
      meta: { title: 'Budweiser' },
    },
    {
      path: '/work/diabetic-pain',
      name: 'diabetic-pain',
      component: () => import('../views/work/DiabeticPainView.vue'),
      meta: { title: 'Diabetic Pain' },
    },
    {
      path: '/work/banana-republic',
      name: 'banana-republic',
      component: () => import('../views/work/BananaRepublicView.vue'),
      meta: { title: 'Banana Republic' },
    },
    {
      path: '/work/jeep',
      name: 'jeep',
      component: () => import('../views/work/JeepView.vue'),
      meta: { title: 'Jeep' },
    },
    {
      path: '/work/midjourney',
      name: 'midjourney',
      component: () => import('../views/work/MidjourneyView.vue'),
      meta: { title: 'Midjourney' },
    },
    {
      path: '/work/saphnelo',
      name: 'saphnelo',
      component: () => import('../views/work/SaphneloView.vue'),
      meta: { title: 'Saphnelo' },
    },
    {
      path: '/work/the-whisky-x',
      name: 'the-whisky-x',
      component: () => import('../views/work/WhiskyXView.vue'),
      meta: { title: 'The Whisky X' },
    },
    {
      path: '/work/peter-cooper-village',
      name: 'peter-cooper-village',
      component: () => import('../views/work/PeterCooperVillageView.vue'),
      meta: { title: 'Peter Cooper Village' },
    },
    {
      path: '/work/game-of-thrones',
      name: 'game-of-thrones',
      component: () => import('../views/work/GameOfThronesView.vue'),
      meta: { title: 'Game of Thrones' },
    },
    {
      path: '/work/graphite-bio',
      name: 'graphite-bio',
      component: () => import('../views/work/GraphiteBioView.vue'),
      meta: { title: 'Graphite Bio' },
    },
    {
      path: '/work/centex-homes',
      name: 'centex-homes',
      component: () => import('../views/work/CentexHomesView.vue'),
      meta: { title: 'Centex Homes' },
    },
    {
      path: '/work/the-setai',
      name: 'the-setai',
      component: () => import('../views/work/TheSetaiView.vue'),
      meta: { title: 'The Setai' },
    },
    {
      path: '/work/stockeld-dreamery',
      name: 'stockeld-dreamery',
      component: () => import('../views/work/StockeldDreameryView.vue'),
      meta: { title: 'Stockeld Dreamery' },
    },
    {
      path: '/work/magenta-therapeutics',
      name: 'magenta-therapeutics',
      component: () => import('../views/work/MagentaTherapeuticsView.vue'),
      meta: { title: 'Magenta Therapeutics' },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  const baseTitle = 'Jason Bellinger';
  document.title = to.meta.title
    ? `${to.meta.title} | ${baseTitle}`
    : baseTitle;
});

export default router;
