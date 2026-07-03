import type { CarModelConfig } from '@/features/car-viewer/types/car'

/**
 * 车型数据 by AI.Coding
 * 使用可配置数据模拟真实豪华跑车矩阵，正式上线时可替换为授权模型与图片资产。
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
    id: 'bmw-m3-competition',
    brand: 'BMW',
    name: 'M3 Competition',
    displayName: 'BMW M3 Competition',
    previewTone: '#7aa6bd',
    hdriPreset: 'cold-studio',
    stats: { power: '510 hp', acceleration: '3.9s', topSpeed: '290 km/h', price: '$82k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'lamborghini-revuelto',
    brand: 'Lamborghini',
    name: 'Revuelto',
    displayName: 'Lamborghini Revuelto',
    previewTone: '#b7ff2a',
    hdriPreset: 'lime-stage',
    stats: { power: '1001 hp', acceleration: '2.5s', topSpeed: '350 km/h', price: '$608k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'ferrari-296-gtb',
    brand: 'Ferrari',
    name: '296 GTB',
    displayName: 'Ferrari 296 GTB',
    previewTone: '#d71928',
    hdriPreset: 'warm-gallery',
    stats: { power: '819 hp', acceleration: '2.9s', topSpeed: '330 km/h', price: '$342k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'porsche-911-turbo-s',
    brand: 'Porsche',
    name: '911 Turbo S',
    displayName: 'Porsche 911 Turbo S',
    previewTone: '#d7dad8',
    hdriPreset: 'softbox-white',
    stats: { power: '640 hp', acceleration: '2.6s', topSpeed: '330 km/h', price: '$231k+' },
    materialSlots: createSlots(),
    options: sharedOptions,
  },
  {
    id: 'mclaren-720s',
    brand: 'McLaren',
    name: '720S',
    displayName: 'McLaren 720S',
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
