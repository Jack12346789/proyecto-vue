import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    { //asi se crea rutas para cada vista o componente
      path: '/contador',
      name: 'contador',
      
      component: () => import('../components/Contador.vue'),
    },
    { //asi se crea rutas para cada vista o componente
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      
      component: () => import('../components/ListaDeTareas.vue'),
    },
  ],
})

export default router
