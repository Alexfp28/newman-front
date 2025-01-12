import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signIn from "@/views/OnlyMovile/Screens/SignIn.vue";
import logIn from "@/views/OnlyMovile/Screens/LogIn.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/onlyMovile/Screens/SignIn',
      name: 'SignIn',
      component: signIn,
    },
    {
      path: '/onlyMovile/Screens/Login',
      name: 'Login',
      component: logIn,
    }
  ],
})

export default router
