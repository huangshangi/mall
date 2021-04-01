import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../views/index')
  },
  {
    path: '/shoppingCart',
    component: () => import('../views/shoppingCart')
  },
  {
    path: '/confirmOrders',
    component: () => import('../views/settingOrder')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/title',
    name: 'Title',
    component: () => import('../components/mallTitle')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
