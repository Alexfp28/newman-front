import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ScheduleView from "@/views/ScheduleView.vue";
import AppointmentView from "@/views/AppointmentView.vue";
import CatalogView from "@/views/CatalogView.vue";
import ContactView from "@/views/ContactView.vue";
import UserProfileSettingsView from "@/views/UserProfileSettingsView.vue";
import UserHistoryView from "@/views/UserHistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView,
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: AppointmentView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/profileSettings',
      name: 'profileSettings',
      component: UserProfileSettingsView,
    },
    {
      path: '/userHistory',
      name: 'userHistory',
      component: UserHistoryView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home'
    }
  ],
})

export default router
