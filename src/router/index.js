import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
     {
      path: '/work',
      name: 'work',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WorkView.vue'),
    },
    {
      path: '/work/elit-pristine-water-series',
      name: 'elit-pristine-water-series',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/ElitePristineView.vue'),
    },
    {
      path: '/work/harley-davidson',
      name: 'harley-davidson',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/HarleyDavidsonView.vue'),
    },
    {
      path: '/work/versace',
      name: 'versace',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/VersaceView.vue'),
    },
     {
      path: '/work/budweiser',
      name: 'budweiser',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/BudweiserView.vue'),
    },
    {
      path: '/work/diabetic-pain',
      name: 'diabetic-pain',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/DiabeticPainView.vue'),
    },
    {
      path: '/work/banana-republic',
      name: 'banana-republic',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/BananaRepublicView.vue'),
    },
    {
      path: '/work/jeep',
      name: 'jeep',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/JeepView.vue'),
    },
    {
      path: '/work/midjourney',
      name: 'midjourney',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/MidjourneyView.vue'),
    },
    {
      path: '/work/saphnelo',
      name: 'saphnelo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/SaphneloView.vue'),
    },
    {
      path: '/work/the-whisky-x',
      name: 'the-whisky-x',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/WhiskyXView.vue'),
    },
    {
      path: '/work/peter-cooper-village',
      name: 'peter-cooper-village',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/work/PeterCooperVillageView.vue'),
    },
   
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  }
})

export default router
