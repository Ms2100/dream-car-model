import { createRouter, createWebHistory } from 'vue-router'
import CarShowcasePage from '@/features/car-viewer/components/CarShowcasePage.vue'

// 路由配置 by AI.Coding：支持默认展示器、车型详情和配置器 URL 复现。
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: CarShowcasePage },
    { path: '/cars/:carId', name: 'car-detail', component: CarShowcasePage },
    { path: '/cars/:carId/configure', name: 'car-configure', component: CarShowcasePage },
    { path: '/gallery', name: 'gallery', component: CarShowcasePage },
  ],
})
