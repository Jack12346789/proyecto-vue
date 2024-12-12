import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
//import RegistroView from '@/modules/registro/views/RegistroView.vue'
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
      
      component: () => import('../modules/contador/components/Contador.vue'),
    },
    { //asi se crea rutas para cada vista o componente
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      
      component: () => import('../modules/listaDeTareas/components/ListaDeTareas.vue'),
    },
    { //asi se crea rutas para cada vista o componente
      path: '/registrar',
      name: 'registrar',
      
      component: () => import('../modules/registro/views/RegistrarView.vue'),
    },

  ],
})

export default router
