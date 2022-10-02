import { createRouter, createWebHistory } from 'vue-router'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: () => import('../pages/home.vue') },
  {
    path: '/account/:auth',
    component: () => import('../pages/account/_auth.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/404.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
