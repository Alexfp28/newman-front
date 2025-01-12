import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test1 from "@/views/OnlyMovile/Screens/Inicio.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/onlyMovile/Screens/test1',
      name: 'test',
      component: test1,
    }
  ],
})

export default router
