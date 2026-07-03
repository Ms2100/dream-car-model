import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { cars, defaultCar } from '@/features/car-viewer/data/cars'
import type { CameraPreset, CarConfigurationState, FocusPart, QualityLevel } from '@/features/car-viewer/types/car'

const STORAGE_KEY = 'dream-car-model-config'

/**
 * 车辆配置状态 by AI.Coding
 * 集中管理车型、材质、灯光、镜头和 URL 分享所需的全局状态。
 */
export const useCarStore = defineStore('car-configurator', () => {
  const initial = loadInitialState()
  const selectedCarId = ref(initial.carId)
  const bodyColorId = ref(initial.bodyColorId)
  const wheelId = ref(initial.wheelId)
  const brakeCaliperId = ref(initial.brakeCaliperId)
  const exteriorKitIds = ref<string[]>(initial.exteriorKitIds)
  const interiorId = ref(initial.interiorId)
  const lightModeId = ref(initial.lightModeId)
  const cameraPreset = ref<CameraPreset>(initial.cameraPreset)
  const qualityLevel = ref<QualityLevel>(initial.qualityLevel)
  const loadingState = ref<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const focusedPart = ref<FocusPart | null>(null)
  const doorsOpen = ref(false)

  const selectedCar = computed(() => cars.find((car) => car.id === selectedCarId.value) ?? defaultCar)
  const currentBodyColor = computed(() => findOrFirst(selectedCar.value.options.bodyColors, bodyColorId.value))
  const currentWheel = computed(() => findOrFirst(selectedCar.value.options.wheels, wheelId.value))
  const currentBrakeCaliper = computed(() => findOrFirst(selectedCar.value.options.brakeCalipers, brakeCaliperId.value))
  const currentInterior = computed(() => findOrFirst(selectedCar.value.options.interiors, interiorId.value))
  const currentLightMode = computed(() => findOrFirst(selectedCar.value.options.lightModes, lightModeId.value))

  /**
   * 选择车型 by AI.Coding
   * 切换时保留通用配置，并让不存在的选项回退到当前车型首个可用项。
   */
  function selectCar(carId: string) {
    const nextCar = cars.find((car) => car.id === carId)
    if (!nextCar) return
    selectedCarId.value = nextCar.id
    bodyColorId.value = ensureOption(nextCar.options.bodyColors, bodyColorId.value)
    wheelId.value = ensureOption(nextCar.options.wheels, wheelId.value)
    brakeCaliperId.value = ensureOption(nextCar.options.brakeCalipers, brakeCaliperId.value)
    interiorId.value = ensureOption(nextCar.options.interiors, interiorId.value)
    lightModeId.value = ensureOption(nextCar.options.lightModes, lightModeId.value)
    persistState()
  }

  /**
   * 更新配置 by AI.Coding
   * 面板交互统一通过该方法写入，确保本地持久化和 URL 状态保持一致。
   */
  function updateConfiguration(patch: Partial<CarConfigurationState>) {
    if (patch.bodyColorId) bodyColorId.value = patch.bodyColorId
    if (patch.wheelId) wheelId.value = patch.wheelId
    if (patch.brakeCaliperId) brakeCaliperId.value = patch.brakeCaliperId
    if (patch.exteriorKitIds) exteriorKitIds.value = patch.exteriorKitIds
    if (patch.interiorId) interiorId.value = patch.interiorId
    if (patch.lightModeId) lightModeId.value = patch.lightModeId
    if (patch.cameraPreset) cameraPreset.value = patch.cameraPreset
    if (patch.qualityLevel) qualityLevel.value = patch.qualityLevel
    persistState()
  }

  /**
   * 切换套件 by AI.Coding
   * 多选外观套件，便于实时显示碳纤维部件。
   */
  function toggleExteriorKit(kitId: string) {
    const exists = exteriorKitIds.value.includes(kitId)
    exteriorKitIds.value = exists ? exteriorKitIds.value.filter((id) => id !== kitId) : [...exteriorKitIds.value, kitId]
    persistState()
  }

  /**
   * 聚焦部件 by AI.Coding
   * 将热点选择与 3D 镜头预设解耦，方便组件显示说明。
   */
  function focusPart(part: FocusPart | null) {
    focusedPart.value = part
  }

  /**
   * 切换车门 by AI.Coding
   * 用布尔状态驱动程序化模型的车门动画。
   */
  function toggleDoors() {
    doorsOpen.value = !doorsOpen.value
  }

  /**
   * 导出当前配置 by AI.Coding
   * 生成 URL 查询参数，用于分享和刷新后复现。
   */
  function toQuery(): Record<string, string> {
    return {
      car: selectedCarId.value,
      color: bodyColorId.value,
      wheels: wheelId.value,
      caliper: brakeCaliperId.value,
      kits: exteriorKitIds.value.join(','),
      interior: interiorId.value,
      lights: lightModeId.value,
      camera: cameraPreset.value,
      quality: qualityLevel.value,
    }
  }

  /**
   * 从查询参数恢复 by AI.Coding
   * 只接收车型数据中存在的值，避免 URL 污染导致状态异常。
   */
  function hydrateFromQuery(query: Record<string, unknown>) {
    const carId = typeof query.car === 'string' ? query.car : selectedCarId.value
    selectCar(carId)
    const car = selectedCar.value
    bodyColorId.value = ensureOption(car.options.bodyColors, asString(query.color) ?? bodyColorId.value)
    wheelId.value = ensureOption(car.options.wheels, asString(query.wheels) ?? wheelId.value)
    brakeCaliperId.value = ensureOption(car.options.brakeCalipers, asString(query.caliper) ?? brakeCaliperId.value)
    interiorId.value = ensureOption(car.options.interiors, asString(query.interior) ?? interiorId.value)
    lightModeId.value = ensureOption(car.options.lightModes, asString(query.lights) ?? lightModeId.value)
    const kits = asString(query.kits)?.split(',').filter(Boolean) ?? exteriorKitIds.value
    exteriorKitIds.value = kits.filter((kitId) => car.options.exteriorKits.some((kit) => kit.id === kitId))
    const nextCamera = asString(query.camera)
    if (isCameraPreset(nextCamera)) cameraPreset.value = nextCamera
    const nextQuality = asString(query.quality)
    if (isQualityLevel(nextQuality)) qualityLevel.value = nextQuality
    persistState()
  }

  /**
   * 持久化状态 by AI.Coding
   * 将核心配置写入 localStorage，浏览器不支持时静默降级。
   */
  function persistState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          carId: selectedCarId.value,
          bodyColorId: bodyColorId.value,
          wheelId: wheelId.value,
          brakeCaliperId: brakeCaliperId.value,
          exteriorKitIds: exteriorKitIds.value,
          interiorId: interiorId.value,
          lightModeId: lightModeId.value,
          cameraPreset: cameraPreset.value,
          qualityLevel: qualityLevel.value,
        }),
      )
    } catch {
      // 本地存储不可用时不阻断配置器核心交互。
    }
  }

  return {
    cars,
    selectedCarId,
    bodyColorId,
    wheelId,
    brakeCaliperId,
    exteriorKitIds,
    interiorId,
    lightModeId,
    cameraPreset,
    qualityLevel,
    loadingState,
    focusedPart,
    doorsOpen,
    selectedCar,
    currentBodyColor,
    currentWheel,
    currentBrakeCaliper,
    currentInterior,
    currentLightMode,
    selectCar,
    updateConfiguration,
    toggleExteriorKit,
    focusPart,
    toggleDoors,
    toQuery,
    hydrateFromQuery,
  }
})

/**
 * 读取初始状态 by AI.Coding
 * 以默认车型为兜底，同时尝试恢复上次配置。
 */
function loadInitialState(): CarConfigurationState {
  const defaults: CarConfigurationState = {
    carId: defaultCar.id,
    bodyColorId: defaultCar.options.bodyColors[0].id,
    wheelId: defaultCar.options.wheels[0].id,
    brakeCaliperId: defaultCar.options.brakeCalipers[0].id,
    exteriorKitIds: ['front-lip'],
    interiorId: defaultCar.options.interiors[0].id,
    lightModeId: defaultCar.options.lightModes[1].id,
    cameraPreset: 'exterior',
    qualityLevel: 'auto',
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults
  } catch {
    return defaults
  }
}

/**
 * 选项兜底 by AI.Coding
 * 根据 id 查找选项，失败时返回列表第一项。
 */
function findOrFirst<T extends { id: string }>(options: T[], id: string): T {
  return options.find((option) => option.id === id) ?? options[0]
}

/**
 * 校验选项 by AI.Coding
 * 确保状态值存在于当前车型可选项中。
 */
function ensureOption<T extends { id: string }>(options: T[], id: string): string {
  return options.some((option) => option.id === id) ? id : options[0].id
}

/**
 * 字符串查询转换 by AI.Coding
 * Vue Router 查询参数可能为数组或 null，这里只接受单字符串。
 */
function asString(value: unknown): string | null {
  return typeof value === 'string' ? value : null
}

/**
 * 镜头预设校验 by AI.Coding
 * 防止非法查询参数进入引擎状态。
 */
function isCameraPreset(value: string | null): value is CameraPreset {
  return value === 'exterior' || value === 'front' || value === 'side' || value === 'rear' || value === 'interior' || value === 'wheel'
}

/**
 * 画质等级校验 by AI.Coding
 * 防止非法查询参数绕过配置面板约束。
 */
function isQualityLevel(value: string | null): value is QualityLevel {
  return value === 'auto' || value === 'high' || value === 'balanced' || value === 'mobile'
}
