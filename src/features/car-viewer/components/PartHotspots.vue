<script setup lang="ts">
import { computed } from 'vue'
import { useCarStore } from '@/app/stores/carStore'
import type { FocusPart } from '@/features/car-viewer/types/car'

const store = useCarStore()

const copy: Record<FocusPart, { title: string; body: string }> = {
  body: { title: '车身漆面', body: 'MeshPhysicalMaterial 清漆层、金属度和粗糙度会随漆面类型即时变化。' },
  wheel: { title: '轮毂与制动', body: '轮毂样式、慢速旋转预览和高饱和卡钳用于模拟真实配置器反馈。' },
  light: { title: '灯光系统', body: '日行灯和摄影棚模式通过 emissive 强度区分，并保留关闭状态的灯罩质感。' },
  interior: { title: '内饰主题', body: '座椅、仪表台与缝线主题可配置，镜头可切入内饰视角。' },
  carbon: { title: '碳纤维套件', body: '前唇、侧裙、尾翼与扩散器支持显隐，纹理由 CanvasTexture 程序生成。' },
}

const active = computed(() => (store.focusedPart ? copy[store.focusedPart] : null))
</script>

<template>
  <div v-if="active" class="hotspot-card">
    <button class="hotspot-close" type="button" aria-label="关闭热点" @click="store.focusPart(null)">×</button>
    <strong>{{ active.title }}</strong>
    <p>{{ active.body }}</p>
  </div>
</template>
