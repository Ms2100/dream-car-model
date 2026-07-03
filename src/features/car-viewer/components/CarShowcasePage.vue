<script setup lang="ts">
import { Camera, DoorOpen, Expand, Share2 } from 'lucide-vue-next'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCarStore } from '@/app/stores/carStore'
import CarConfigurator from '@/features/car-viewer/components/CarConfigurator.vue'
import CarSelector from '@/features/car-viewer/components/CarSelector.vue'
import CarViewer from '@/features/car-viewer/components/CarViewer.vue'
import PartHotspots from '@/features/car-viewer/components/PartHotspots.vue'

const store = useCarStore()
const router = useRouter()
const route = useRoute()
const viewer = ref<InstanceType<typeof CarViewer> | null>(null)
const mobilePanelOpen = ref(false)

const stats = computed(() => [
  { label: '马力', value: store.selectedCar.stats.power },
  { label: '0-100', value: store.selectedCar.stats.acceleration },
  { label: '极速', value: store.selectedCar.stats.topSpeed },
  { label: '价格', value: store.selectedCar.stats.price },
])

/**
 * 分享配置 by AI.Coding
 * 将当前配置写入剪贴板，无法访问剪贴板时保留地址栏更新结果。
 */
async function shareConfiguration() {
  const url = new URL(window.location.href)
  Object.entries(store.toQuery()).forEach(([key, value]) => url.searchParams.set(key, value))
  await navigator.clipboard?.writeText(url.toString())
}

onMounted(() => {
  const routeCarId = typeof route.params.carId === 'string' ? route.params.carId : undefined
  store.hydrateFromQuery({ ...route.query, car: route.query.car ?? routeCarId ?? store.selectedCarId })
})

watch(
  () => store.toQuery(),
  (query) => {
    router.replace({ name: 'car-configure', params: { carId: store.selectedCarId }, query })
  },
  { deep: true },
)
</script>

<template>
  <main class="showcase-shell">
    <header class="topbar">
      <a class="brand" href="/" aria-label="Dream Car Model 首页">
        <span class="brand-mark" />
        Dream Car Model
      </a>
      <nav class="main-nav" aria-label="页面导航">
        <a href="#cars">车型</a>
        <a href="#config">配置</a>
        <a href="#performance">性能</a>
        <a href="#gallery">图库</a>
      </nav>
      <div class="tool-cluster">
        <button type="button" title="截图" @click="viewer?.captureShot()"><Camera :size="18" /></button>
        <button type="button" title="车门" @click="store.toggleDoors()"><DoorOpen :size="18" /></button>
        <button type="button" title="全屏" @click="viewer?.toggleFullscreen()"><Expand :size="18" /></button>
        <button type="button" title="分享" @click="shareConfiguration"><Share2 :size="18" /></button>
      </div>
    </header>

    <section class="stage-layout">
      <CarSelector id="cars" />
      <section class="viewer-stage" aria-label="车辆展示区">
        <div class="model-title">
          <span>{{ store.selectedCar.brand }}</span>
          <h1>{{ store.selectedCar.name }}</h1>
        </div>
        <CarViewer ref="viewer" />
        <PartHotspots />
      </section>
      <CarConfigurator id="config" />
    </section>

    <footer id="performance" class="stats-bar">
      <button class="mobile-config-toggle" type="button" @click="mobilePanelOpen = !mobilePanelOpen">配置</button>
      <div v-for="item in stats" :key="item.label" class="stat-item">
        <small>{{ item.label }}</small>
        <strong>{{ item.value }}</strong>
      </div>
    </footer>

    <div class="mobile-config-drawer" :class="{ open: mobilePanelOpen }">
      <CarConfigurator />
    </div>
  </main>
</template>
