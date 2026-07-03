<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useCarStore } from '@/app/stores/carStore'
import { CarViewerEngine } from '@/features/car-viewer/engine/CarViewerEngine'

const store = useCarStore()
const canvasHost = ref<HTMLElement | null>(null)
let engine: CarViewerEngine | null = null

const snapshot = computed(() => ({
  bodyColor: store.currentBodyColor,
  wheel: store.currentWheel,
  brakeCaliper: store.currentBrakeCaliper,
  exteriorKitIds: store.exteriorKitIds,
  interior: store.currentInterior,
  lightMode: store.currentLightMode,
  cameraPreset: store.cameraPreset,
  qualityLevel: store.qualityLevel,
  doorsOpen: store.doorsOpen,
}))

/**
 * 捕获截图 by AI.Coding
 * 将当前渲染画面下载为 PNG 文件。
 */
function captureShot() {
  if (!engine) return
  const link = document.createElement('a')
  link.download = `${store.selectedCar.id}-configuration.png`
  link.href = engine.capture()
  link.click()
}

/**
 * 切换全屏 by AI.Coding
 * 将 3D 视窗放大查看，移动端也能聚焦车辆细节。
 */
async function toggleFullscreen() {
  const host = canvasHost.value
  if (!host) return
  if (document.fullscreenElement) {
    await document.exitFullscreen()
  } else {
    await host.requestFullscreen()
  }
}

defineExpose({ captureShot, toggleFullscreen })

onMounted(() => {
  if (!canvasHost.value) return
  store.loadingState = 'loading'
  engine = new CarViewerEngine(canvasHost.value, (part) => store.focusPart(part))
  engine.update(snapshot.value)
  store.loadingState = 'ready'
})

watch(
  snapshot,
  (next) => {
    engine?.update(next)
  },
  { deep: true },
)

onBeforeUnmount(() => {
  engine?.dispose()
})
</script>

<template>
  <div ref="canvasHost" class="viewer-canvas-host" aria-label="3D 跑车展示器">
    <div v-if="store.loadingState === 'loading'" class="viewer-loader">
      <span class="loader-silhouette" />
    </div>
  </div>
</template>
