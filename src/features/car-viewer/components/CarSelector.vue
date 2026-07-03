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
      :class="{ active: car.id === store.selectedCarId }"
      type="button"
      @click="store.selectCar(car.id)"
    >
      <span class="car-swatch" :style="{ '--tone': car.previewTone }" />
      <span class="car-meta">
        <strong>{{ car.brand }}</strong>
        <small>{{ car.name }}</small>
      </span>
    </button>
  </aside>
</template>
