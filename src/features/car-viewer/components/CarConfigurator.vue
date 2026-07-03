<script setup lang="ts">
import { Check, CircleDot, Gauge, Lightbulb, Palette, Shield, Sparkles } from 'lucide-vue-next'
import { useCarStore } from '@/app/stores/carStore'
import type { CameraPreset, QualityLevel } from '@/features/car-viewer/types/car'

const store = useCarStore()

const cameraOptions: Array<{ id: CameraPreset; label: string }> = [
  { id: 'exterior', label: '外观' },
  { id: 'front', label: '前脸' },
  { id: 'side', label: '侧面' },
  { id: 'rear', label: '尾部' },
  { id: 'interior', label: '内饰' },
  { id: 'wheel', label: '轮毂' },
]

const qualityOptions: Array<{ id: QualityLevel; label: string }> = [
  { id: 'auto', label: '自动' },
  { id: 'high', label: '高质' },
  { id: 'balanced', label: '均衡' },
  { id: 'mobile', label: '省电' },
]
</script>

<template>
  <aside class="configurator" aria-label="车辆配置">
    <section class="panel-section">
      <div class="section-title"><Palette :size="16" /> 车身颜色</div>
      <div class="swatch-grid">
        <button
          v-for="color in store.selectedCar.options.bodyColors"
          :key="color.id"
          class="paint-swatch"
          :class="{ active: color.id === store.bodyColorId }"
          :style="{ '--paint': color.hex }"
          type="button"
          :title="color.name"
          @click="store.updateConfiguration({ bodyColorId: color.id })"
        >
          <Check v-if="color.id === store.bodyColorId" :size="14" />
        </button>
      </div>
    </section>

    <section class="panel-section">
      <div class="section-title"><CircleDot :size="16" /> 轮毂</div>
      <div class="option-stack">
        <button
          v-for="wheel in store.selectedCar.options.wheels"
          :key="wheel.id"
          class="option-row"
          :class="{ active: wheel.id === store.wheelId }"
          type="button"
          @click="store.updateConfiguration({ wheelId: wheel.id })"
        >
          <span class="wheel-chip" :style="{ '--wheel': wheel.color }" />
          {{ wheel.name }}
        </button>
      </div>
    </section>

    <section class="panel-section">
      <div class="section-title"><Shield :size="16" /> 刹车卡钳</div>
      <div class="swatch-grid tight">
        <button
          v-for="color in store.selectedCar.options.brakeCalipers"
          :key="color.id"
          class="paint-swatch small"
          :class="{ active: color.id === store.brakeCaliperId }"
          :style="{ '--paint': color.hex }"
          type="button"
          :title="color.name"
          @click="store.updateConfiguration({ brakeCaliperId: color.id })"
        />
      </div>
    </section>

    <section class="panel-section">
      <div class="section-title"><Sparkles :size="16" /> 外观套件</div>
      <div class="option-stack">
        <button
          v-for="kit in store.selectedCar.options.exteriorKits"
          :key="kit.id"
          class="option-row"
          :class="{ active: store.exteriorKitIds.includes(kit.id) }"
          type="button"
          @click="store.toggleExteriorKit(kit.id)"
        >
          <span>{{ kit.name }}</span>
        </button>
      </div>
    </section>

    <section class="panel-section">
      <div class="section-title"><Gauge :size="16" /> 内饰 / 镜头</div>
      <select class="select-field" :value="store.interiorId" @change="store.updateConfiguration({ interiorId: ($event.target as HTMLSelectElement).value })">
        <option v-for="interior in store.selectedCar.options.interiors" :key="interior.id" :value="interior.id">
          {{ interior.name }}
        </option>
      </select>
      <div class="segmented">
        <button
          v-for="camera in cameraOptions"
          :key="camera.id"
          :class="{ active: camera.id === store.cameraPreset }"
          type="button"
          @click="store.updateConfiguration({ cameraPreset: camera.id })"
        >
          {{ camera.label }}
        </button>
      </div>
    </section>

    <section class="panel-section">
      <div class="section-title"><Lightbulb :size="16" /> 灯光 / 画质</div>
      <div class="segmented">
        <button
          v-for="light in store.selectedCar.options.lightModes"
          :key="light.id"
          :class="{ active: light.id === store.lightModeId }"
          type="button"
          @click="store.updateConfiguration({ lightModeId: light.id })"
        >
          {{ light.name }}
        </button>
      </div>
      <div class="segmented">
        <button
          v-for="quality in qualityOptions"
          :key="quality.id"
          :class="{ active: quality.id === store.qualityLevel }"
          type="button"
          @click="store.updateConfiguration({ qualityLevel: quality.id })"
        >
          {{ quality.label }}
        </button>
      </div>
    </section>
  </aside>
</template>
