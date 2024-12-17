import { createRouter, createWebHistory } from 'vue-router';
import DoctorsTable from '../components/DoctorsTable.vue';
import NursesTable from '../components/NursesTable.vue';

const routes = [
  { path: '/', component: DoctorsTable },
  { path: '/nurses', component: NursesTable },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
