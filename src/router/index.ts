import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/trips/:tripName/jour-:jourId',
      name: 'TripView',
      component: () => import('../views/TripView.vue')
    },
  ],
})

export default router
