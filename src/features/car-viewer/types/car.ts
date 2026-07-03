/**
 * 车辆配置类型 by AI.Coding
 * 约束车型、材质插槽和配置面板的数据结构，便于后续替换真实 GLB 资产。
 */
export interface CarStats {
  power: string
  acceleration: string
  topSpeed: string
  price: string
}

export interface ColorOption {
  id: string
  name: string
  hex: string
  finish?: 'metallic' | 'matte' | 'pearl' | 'racing'
}

export interface WheelOption {
  id: string
  name: string
  color: string
  spokeCount: number
}

export interface ExteriorKitOption {
  id: string
  name: string
  description: string
}

export interface InteriorOption {
  id: string
  name: string
  primary: string
  stitch: string
}

export interface LightModeOption {
  id: string
  name: string
  intensity: number
}

export interface CarModelTransform {
  scale: number
  rotationY: number
  offsetY: number
}

export interface CarVisualTuning {
  stableWheelVisuals?: boolean
  calibratedLampOverlays?: boolean
}

export interface CarAssetCredit {
  title: string
  author: string
  license: string
  source: string
}

export interface CarMaterialSlots {
  body: string[]
  glass: string[]
  tire: string[]
  wheel: string[]
  brakeCaliper: string[]
  carbonFiber: string[]
  leather: string[]
  light: string[]
}

export interface CarOptions {
  bodyColors: ColorOption[]
  wheels: WheelOption[]
  brakeCalipers: ColorOption[]
  exteriorKits: ExteriorKitOption[]
  interiors: InteriorOption[]
  lightModes: LightModeOption[]
}

export interface SceneStyleOption {
  id: SceneStyle
  name: string
}

export interface CarModelConfig {
  id: string
  brand: string
  name: string
  displayName: string
  modelUrl?: string
  modelTransform?: CarModelTransform
  visualTuning?: CarVisualTuning
  modelCredit?: CarAssetCredit
  engineSoundUrl?: string
  engineSoundLabel?: string
  soundCredit?: CarAssetCredit
  assetStatus?: 'ready' | 'pending'
  previewTone: string
  previewImage?: string
  hdriPreset: string
  stats: CarStats
  materialSlots: CarMaterialSlots
  options: CarOptions
}

export interface CarConfigurationState {
  carId: string
  bodyColorId: string
  wheelId: string
  brakeCaliperId: string
  exteriorKitIds: string[]
  interiorId: string
  lightModeId: string
  cameraPreset: CameraPreset
  qualityLevel: QualityLevel
  sceneStyle: SceneStyle
}

export type CameraPreset = 'exterior' | 'front' | 'side' | 'rear' | 'interior' | 'wheel'

export type QualityLevel = 'auto' | 'high' | 'balanced' | 'mobile'

export type SceneStyle = 'studio' | 'city-road' | 'beach' | 'grassland' | 'ruins' | 'other'

export type FocusPart = 'body' | 'wheel' | 'light' | 'interior' | 'carbon'
