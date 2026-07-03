<script setup lang="ts">
import { useCarStore } from '@/app/stores/carStore'

const store = useCarStore()
</script>

<template>
  <aside class="car-selector" aria-label="车型选择">
    <button
      v-for="car in store.cars"
      :key="car.id"
      class="car-tile"
      :class="{ active: car.id === store.selectedCarId, pending: car.assetStatus === 'pending' }"
      type="button"
      :disabled="car.assetStatus === 'pending'"
      :title="car.assetStatus === 'pending' ? '待接入授权真实 GLB 模型' : car.displayName"
      @click="store.selectCar(car.id)"
    >
      <span class="car-swatch" :class="{ 'has-preview': car.previewImage }" :style="{ '--tone': car.previewTone, '--preview': car.previewImage ? `url(${car.previewImage})` : '' }" />
      <span class="car-meta">
        <strong>{{ car.brand }}</strong>
        <small>{{ car.name }}</small>
        <em v-if="car.assetStatus === 'pending'">待授权模型</em>
      </span>
    </button>
  </aside>
</template>
