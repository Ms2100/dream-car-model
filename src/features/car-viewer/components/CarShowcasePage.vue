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
const engineRoaring = ref(false)
const soundError = ref(false)
let engineAudio: HTMLAudioElement | null = null
let longPressTimer: number | null = null
let longPressActive = false

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

/**
 * 准备发动机音频 by AI.Coding
 * 按当前真实车型绑定对应发动机录音，车型切换时重新创建音频实例。
 */
function prepareEngineAudio() {
  engineAudio?.pause()
  engineAudio = null
  engineRoaring.value = false
  soundError.value = false
  const soundUrl = store.selectedCar.engineSoundUrl
  if (!soundUrl) return
  engineAudio = new Audio(soundUrl)
  engineAudio.preload = 'none'
  engineAudio.volume = 0.86
  engineAudio.addEventListener('error', () => {
    soundError.value = true
    engineRoaring.value = false
  })
}

/**
 * 播放一次轰鸣 by AI.Coding
 * 短按按钮时从录音开头播放一段真实发动机声音。
 */
async function playEngineBurst() {
  if (!engineAudio) prepareEngineAudio()
  if (!engineAudio) return
  soundError.value = false
  engineAudio.loop = false
  engineAudio.currentTime = 0
  engineRoaring.value = true
  try {
    await engineAudio.play()
  } catch {
    soundError.value = true
    engineRoaring.value = false
  }
}

/**
 * 开始长按监听 by AI.Coding
 * 长按超过阈值后循环播放发动机录音，形成持续轰鸣展示。
 */
function startEnginePress() {
  longPressActive = false
  if (longPressTimer) window.clearTimeout(longPressTimer)
  longPressTimer = window.setTimeout(async () => {
    if (!engineAudio) prepareEngineAudio()
    if (!engineAudio) return
    longPressActive = true
    engineAudio.loop = true
    engineAudio.currentTime = 0
    engineRoaring.value = true
    try {
      await engineAudio.play()
    } catch {
      soundError.value = true
      engineRoaring.value = false
    }
  }, 260)
}

/**
 * 结束发动机按压 by AI.Coding
 * 松开长按时停止循环；普通点击则触发一次轰鸣。
 */
function endEnginePress() {
  if (longPressTimer) window.clearTimeout(longPressTimer)
  longPressTimer = null
  if (longPressActive) {
    engineAudio?.pause()
    engineRoaring.value = false
    longPressActive = false
    return
  }
  void playEngineBurst()
}

onMounted(() => {
  const routeCarId = typeof route.params.carId === 'string' ? route.params.carId : undefined
  store.hydrateFromQuery({ ...route.query, car: route.query.car ?? routeCarId ?? store.selectedCarId })
  prepareEngineAudio()
})

watch(
  () => store.selectedCarId,
  () => prepareEngineAudio(),
)

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
        <button
          type="button"
          class="engine-roar-button"
          :class="{ active: engineRoaring, error: soundError }"
          :title="soundError ? '发动机录音暂不可访问' : `发动机轰鸣：${store.selectedCar.engineSoundLabel ?? store.selectedCar.displayName}`"
          @pointerdown.prevent="startEnginePress"
          @pointerup.prevent="endEnginePress"
          @pointercancel.prevent="endEnginePress"
          @pointerleave="longPressActive && endEnginePress()"
        >
          <span class="pedal-icon" aria-hidden="true" />
        </button>
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
