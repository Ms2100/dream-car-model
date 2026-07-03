import type { CarModelConfig } from '@/features/car-viewer/types/car'

/**
 * 车型数据 by AI.Coding
 * 只把已经绑定真实 GLB 的车型作为可选车辆，避免用程序化占位模型冒充真实车型。
 */
const sharedOptions = {
  bodyColors: [
    { id: 'liquid-silver', name: '液态银', hex: '#c9d1d3', finish: 'metallic' },
    { id: 'rosso-corsa', name: '赛道红', hex: '#c91522', finish: 'pearl' },
    { id: 'midnight-black', name: '午夜黑', hex: '#111318', finish: 'metallic' },
    { id: 'electric-lime', name: '电光青柠', hex: '#b6ff2e', finish: 'racing' },
    { id: 'frozen-blue', name: '冰川蓝', hex: '#5c8fb6', finish: 'matte' },
  ],
  wheels: [
    { id: 'forged-black', name: '锻造黑曜', color: '#101216', spokeCount: 10 },
    { id: 'turbine-silver', name: '涡轮银刃', color: '#d5d8d5', spokeCount: 12 },
    { id: 'bronze-track', name: '赛道古铜', color: '#b07a3a', spokeCount: 8 },
  ],
  brakeCalipers: [
    { id: 'red', name: '红色卡钳', hex: '#e31f2f' },
    { id: 'yellow', name: '黄色卡钳', hex: '#ffd12a' },
    { id: 'blue', name: '蓝色卡钳', hex: '#2384ff' },
    { id: 'black', name: '黑色卡钳', hex: '#0b0b0d' },
    { id: 'silver', name: '银色卡钳', hex: '#c3c8cc' },
  ],
  exteriorKits: [
    { id: 'front-lip', name: '碳纤维前唇', description: '强化前脸低趴姿态' },
    { id: 'side-skirt', name: '碳纤维侧裙', description: '拉长车身视觉重心' },
    { id: 'active-wing', name: '主动尾翼', description: '高速状态自动抬升' },
  ],
  interiors: [
    { id: 'onyx-red', name: '曜石黑 / 红缝线', primary: '#141316', stitch: '#e4363f' },
    { id: 'tan-carbon', name: '焦糖棕 / 碳饰板', primary: '#8c5a35', stitch: '#e6bc7a' },
    { id: 'storm-blue', name: '风暴蓝 / 银缝线', primary: '#1d3248', stitch: '#dfe8ee' },
  ],
  lightModes: [
    { id: 'off', name: '关闭', intensity: 0 },
    { id: 'signature', name: '日行灯', intensity: 0.75 },
    { id: 'studio', name: '摄影棚高亮', intensity: 1.35 },
  ],
} satisfies CarModelConfig['options']

export const cars: CarModelConfig[] = [
  {
    id: 'bmw-m4-competition',
    brand: 'BMW',
    name: 'M4 Competition',
    displayName: 'BMW M4 Competition M Package',
    modelUrl: '/models/bmw-m4-competition.glb',
    modelTransform: { scale: 1, rotationY: Math.PI, offsetY: -0.36 },
    visualTuning: { stableWheelVisuals: true, calibratedLampOverlays: true },
    modelCredit: {
      title: 'BMW M4 Competition M Package',
      author: 'SRT Performance',
      license: 'CC BY 4.0',
      source: 'https://sketchfab.com/3d-models/bmw-m4-competition-m-package-5c0a2dafb1ad408d9fc9eeef9aee531b',
    },
    engineSoundUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/M57.ogg',
    engineSoundLabel: 'BMW 直列六缸发动机录音',
    assetStatus: 'ready',
    previewTone: '#7aa6bd',
    previewImage: '/thumbnails/bmw-m4-competition.png',
    hdriPreset: 'cold-studio',
    stats: { power: '503 hp', acceleration: '3.8s', topSpeed: '290 km/h', price: '$80k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'ferrari-458-italia',
    brand: 'Ferrari',
    name: '458 Italia',
    displayName: 'Ferrari 458 Italia',
    modelTransform: { scale: 1, rotationY: Math.PI, offsetY: -0.45 },
    modelCredit: {
      title: 'Ferrari 458 Italia authorized GLB required',
      author: '待接入授权模型',
      license: 'Pending',
      source: 'https://sketchfab.com/3d-models/2011-ferrari-458-italia-bb6c7fa565c04ec59cd9d0e0a4d0098c',
    },
    engineSoundUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Ferrari%20458%20Italia.ogg',
    engineSoundLabel: 'Ferrari 458 Italia 发动机录音',
    assetStatus: 'pending',
    previewTone: '#d71928',
    hdriPreset: 'warm-gallery',
    stats: { power: '562 hp', acceleration: '3.4s', topSpeed: '325 km/h', price: '$239k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'porsche-911-930-turbo',
    brand: 'Porsche',
    name: '911 930 Turbo',
    displayName: 'Porsche 911 930 Turbo 1975',
    modelUrl: '/models/porsche-911-930/scene.gltf',
    modelTransform: { scale: 1, rotationY: Math.PI, offsetY: -0.45 },
    visualTuning: { stableWheelVisuals: false, calibratedLampOverlays: false },
    modelCredit: {
      title: 'Porsche 911 930 Turbo 1975 3D Model',
      author: 'Utkarsh Pathrabe',
      license: 'MIT',
      source: 'https://github.com/UtkarshPathrabe/Porche-911-930-Turbo-1975-3D-Model',
    },
    engineSoundUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Porsche%20997%20GT3%20RS.ogg',
    engineSoundLabel: 'Porsche GT3 RS 发动机录音',
    assetStatus: 'ready',
    previewTone: '#d7dad8',
    previewImage: '/thumbnails/porsche-911-930-turbo.png',
    hdriPreset: 'softbox-white',
    stats: { power: '260 hp', acceleration: '5.5s', topSpeed: '250 km/h', price: '$170k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'lamborghini-revuelto',
    brand: 'Lamborghini',
    name: 'Revuelto',
    displayName: 'Lamborghini Revuelto',
    engineSoundUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Lamborghini%20Aventador%20LP700-4%20%282011%29.ogg',
    engineSoundLabel: 'Lamborghini V12 发动机录音',
    assetStatus: 'pending',
    previewTone: '#b7ff2a',
    hdriPreset: 'lime-stage',
    stats: { power: '1001 hp', acceleration: '2.5s', topSpeed: '350 km/h', price: '$608k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'mclaren-720s',
    brand: 'McLaren',
    name: '720S',
    displayName: 'McLaren 720S',
    engineSoundUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/McLaren%20MP4-12C.ogg',
    engineSoundLabel: 'McLaren V8 发动机录音',
    assetStatus: 'pending',
    previewTone: '#f27d21',
    hdriPreset: 'amber-tunnel',
    stats: { power: '710 hp', acceleration: '2.8s', topSpeed: '341 km/h', price: '$310k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'mercedes-amg-gt',
    brand: 'Mercedes-AMG',
    name: 'GT',
    displayName: 'Mercedes-AMG GT',
    engineSoundUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercedes-Benz%20SLS%20AMG.ogg',
    engineSoundLabel: 'Mercedes-AMG V8 发动机录音',
    assetStatus: 'pending',
    previewTone: '#1f2329',
    hdriPreset: 'night-studio',
    stats: { power: '577 hp', acceleration: '3.1s', topSpeed: '315 km/h', price: '$177k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
]

/**
 * 创建材质插槽 by AI.Coding
 * 让程序化模型和未来 GLB 模型使用同一套插槽命名。
 */
function createSlots(): CarModelConfig['materialSlots'] {
  return {
    body: ['body-shell', 'door-left', 'door-right'],
    glass: ['windshield', 'side-glass'],
    tire: ['tire-front-left', 'tire-front-right', 'tire-rear-left', 'tire-rear-right'],
    wheel: ['wheel-front-left', 'wheel-front-right', 'wheel-rear-left', 'wheel-rear-right'],
    brakeCaliper: ['caliper-front-left', 'caliper-front-right', 'caliper-rear-left', 'caliper-rear-right'],
    carbonFiber: ['front-lip', 'side-skirt', 'diffuser', 'wing'],
    leather: ['seat-left', 'seat-right', 'dashboard'],
    light: ['headlight-left', 'headlight-right', 'taillight-left', 'taillight-right'],
  }
}

export const defaultCar = cars[0]
