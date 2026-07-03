import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '@/App.vue'
import { router } from '@/app/router'
import '@/app/styles/global.css'

// 应用入口 by AI.Coding：挂载 Vue、Pinia 和路由，启动 3D 配置器。
createApp(App).use(createPinia()).use(router).mount('#app')
