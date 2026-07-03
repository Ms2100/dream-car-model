import { gsap } from 'gsap'
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Box3,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Group,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Raycaster,
  RectAreaLight,
  RepeatWrapping,
  Scene,
  SphereGeometry,
  SRGBColorSpace,
  Shape,
  ShapeGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type {
  CameraPreset,
  CarModelConfig,
  ColorOption,
  FocusPart,
  InteriorOption,
  LightModeOption,
  QualityLevel,
  SceneStyle,
  WheelOption,
} from '@/features/car-viewer/types/car'

export interface EngineSnapshot {
  car: CarModelConfig
  bodyColor: ColorOption
  wheel: WheelOption
  brakeCaliper: ColorOption
  exteriorKitIds: string[]
  interior: InteriorOption
  lightMode: LightModeOption
  cameraPreset: CameraPreset
  qualityLevel: QualityLevel
  sceneStyle: SceneStyle
  doorsOpen: boolean
}

interface CarParts {
  root: Group
  body: Mesh[]
  wheels: Mesh[]
  wheelVisuals: Mesh[]
  calipers: Mesh[]
  carbon: Mesh[]
  lights: Mesh[]
  interior: Mesh[]
  leftDoor: Group
  rightDoor: Group
}

type HotspotHandler = (part: FocusPart) => void
type SpinAxis = 'x' | 'y' | 'z'

/**
 * 3D 跑车展示引擎 by AI.Coding
 * 封装 Three.js 场景、真实 GLB 车辆加载、材质切换、镜头动画和拾取交互。
 */
export class CarViewerEngine {
  private readonly container: HTMLElement
  private readonly onHotspot: HotspotHandler
  private readonly scene = new Scene()
  private readonly camera = new PerspectiveCamera(38, 1, 0.1, 100)
  private readonly renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true })
  private readonly raycaster = new Raycaster()
  private readonly loader = new GLTFLoader()
  private readonly pointer = new Vector2()
  private readonly controls: OrbitControls
  private readonly clockTarget = new Vector3(0, 0.65, 0)
  private readonly floor: Mesh
  private readonly environmentGroup = new Group()
  private carParts: CarParts
  private animationFrame = 0
  private isDisposed = false
  private isVisible = true
  private lastSnapshot: EngineSnapshot | null = null
  private activeCarId = ''
  private appliedCameraPreset: CameraPreset | null = null
  private appliedSceneStyle: SceneStyle | null = null
  private loadSequence = 0

  constructor(container: HTMLElement, onHotspot: HotspotHandler) {
    this.container = container
    this.onHotspot = onHotspot
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.carParts = this.createProceduralCar()
    this.floor = this.createFloor()

    this.configureRenderer()
    this.configureScene()
    this.configureControls()
    this.container.appendChild(this.renderer.domElement)
    this.resize()

    window.addEventListener('resize', this.resize)
    document.addEventListener('visibilitychange', this.handleVisibility)
    this.renderer.domElement.addEventListener('pointerdown', this.handlePointerDown)
    this.animate()
  }

  /**
   * 应用快照 by AI.Coding
   * 将 Vue 状态同步到 Three.js 材质、部件显隐、车门与镜头。
   */
  update(snapshot: EngineSnapshot) {
    this.lastSnapshot = snapshot
    const carChanged = snapshot.car.id !== this.activeCarId
    if (carChanged) {
      void this.loadCar(snapshot.car)
    }
    this.applyPaint(snapshot.bodyColor)
    this.applyWheels(snapshot.wheel)
    this.applyBrakeCalipers(snapshot.brakeCaliper)
    this.applyCarbonKits(snapshot.exteriorKitIds)
    this.applyInterior(snapshot.interior)
    this.applyLights(snapshot.lightMode)
    this.applyQuality(snapshot.qualityLevel)
    this.applySceneStyle(snapshot.sceneStyle)
    this.animateDoors(snapshot.doorsOpen)
    if (carChanged || snapshot.cameraPreset !== this.appliedCameraPreset) {
      this.appliedCameraPreset = snapshot.cameraPreset
      this.moveCamera(snapshot.cameraPreset)
    }
  }

  /**
   * 截图 by AI.Coding
   * 让 UI 可以导出当前 canvas 画面。
   */
  capture(): string {
    this.renderer.render(this.scene, this.camera)
    return this.renderer.domElement.toDataURL('image/png')
  }

  /**
   * 调整尺寸 by AI.Coding
   * 跟随容器尺寸更新相机比例和渲染缓冲。
   */
  resize = () => {
    const { clientWidth, clientHeight } = this.container
    const width = Math.max(clientWidth, 320)
    const height = Math.max(clientHeight, 320)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height, false)
  }

  /**
   * 销毁引擎 by AI.Coding
   * 释放事件监听、动画帧和 GPU 资源，避免路由切换泄漏。
   */
  dispose() {
    this.isDisposed = true
    cancelAnimationFrame(this.animationFrame)
    window.removeEventListener('resize', this.resize)
    document.removeEventListener('visibilitychange', this.handleVisibility)
    this.renderer.domElement.removeEventListener('pointerdown', this.handlePointerDown)
    this.controls.dispose()
    this.disposeCarParts()
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }

  /**
   * 释放车辆资源 by AI.Coding
   * 切换真实 GLB 或销毁页面时清理旧模型，避免 GPU 几何体与材质泄漏。
   */
  private disposeCarParts() {
    this.scene.remove(this.carParts.root)
    this.carParts.root.traverse((object) => {
      if (object instanceof Mesh) {
        object.geometry.dispose()
        const materials = Array.isArray(object.material) ? object.material : [object.material]
        materials.forEach((material) => material.dispose())
      }
    })
  }

  /**
   * 加载真实车型 by AI.Coding
   * 优先加载车型配置中的 GLB，并在失败时回落到程序化占位车，保证页面仍可交互。
   */
  private async loadCar(car: CarModelConfig) {
    const sequence = ++this.loadSequence
    this.activeCarId = car.id
    const nextParts = car.modelUrl ? await this.loadGltfCar(car, sequence) : this.createProceduralCar()
    if (sequence !== this.loadSequence) {
      this.disposeLooseRoot(nextParts.root)
      return
    }
    this.disposeCarParts()
    this.carParts = nextParts
    this.scene.add(this.carParts.root)
    if (this.lastSnapshot) this.update(this.lastSnapshot)
  }

  /**
   * 读取 GLB 车型 by AI.Coding
   * 对加载后的真实模型做居中、缩放、阴影设置和材质插槽识别。
   */
  private loadGltfCar(car: CarModelConfig, sequence: number): Promise<CarParts> {
    return new Promise((resolve) => {
      this.loader.load(
        car.modelUrl ?? '',
        (gltf) => {
          if (sequence !== this.loadSequence) {
            this.disposeLooseRoot(gltf.scene)
            return
          }
          const root = new Group()
          root.name = `${car.id}-real-glb`
          root.add(gltf.scene)
          this.normalizeModel(root, car)
          resolve(this.collectRealCarParts(root, car))
        },
        undefined,
        () => resolve(this.createProceduralCar()),
      )
    })
  }

  /**
   * 归一化模型姿态 by AI.Coding
   * 将来源不同的 GLB 统一到展示器坐标，确保真实车型自然落在摄影棚地面上。
   */
  private normalizeModel(root: Group, car: CarModelConfig) {
    const sourceBox = new Box3().setFromObject(root)
    const size = sourceBox.getSize(new Vector3())
    const longest = Math.max(size.x, size.y, size.z, 1)
    const transform = car.modelTransform ?? { scale: 1, rotationY: Math.PI, offsetY: -0.45 }
    root.scale.setScalar((4.6 / longest) * transform.scale)
    root.rotation.y = transform.rotationY
    root.updateMatrixWorld(true)

    const fittedBox = new Box3().setFromObject(root)
    const center = fittedBox.getCenter(new Vector3())
    root.position.x -= center.x
    root.position.z -= center.z
    root.position.y += transform.offsetY - fittedBox.min.y
  }

  /**
   * 收集真实模型部件 by AI.Coding
   * 根据 mesh 与材质名称建立可配置插槽，兼容不同 GLB 的命名差异。
   */
  private collectRealCarParts(root: Group, car: CarModelConfig): CarParts {
    const body: Mesh[] = []
    const wheels: Mesh[] = []
    const calipers: Mesh[] = []
    const carbon: Mesh[] = []
    const lights: Mesh[] = []
    const interior: Mesh[] = []
    const allMeshes: Mesh[] = []

    root.traverse((object) => {
      if (!(object instanceof Mesh)) return
      object.castShadow = true
      object.receiveShadow = true
      this.rememberOriginalMaterials(object)
      allMeshes.push(object)
      const key = `${object.name} ${this.materialName(object)}`.toLowerCase()
      if (this.matchesAny(key, ['wheel', 'rim', 'tyre', 'tire', 'rubber'])) {
        wheels.push(object)
      }
      if (this.matchesAny(key, ['caliper', 'brake'])) calipers.push(object)
      if (this.matchesAny(key, ['carbon', 'trim', 'diffuser', 'spoiler'])) carbon.push(object)
      if (this.matchesAny(key, ['light', 'lamp', 'head', 'tail'])) lights.push(object)
      if (this.matchesAny(key, ['seat', 'interior', 'dashboard', 'cabin', 'leather'])) interior.push(object)
      if (this.matchesAny(key, ['body', 'paint', 'carpaint', 'hood', 'door', 'bumper', 'fender', 'bonnet'])) body.push(object)
    })

    if (body.length === 0) body.push(...this.pickLargestBodyMeshes(allMeshes))
    const realLights = this.pickControlledRealLights(root, lights, car)
    const overlayLights = this.shouldUseCalibratedLampOverlays(car, realLights) ? this.createCalibratedLampOverlays(root, car) : []
    const controlledLights = realLights.length > 0 || overlayLights.length > 0 ? [...realLights, ...overlayLights] : this.createFallbackHeadlights(root)
    const wheelVisuals = this.shouldUseStableWheelVisuals(root, car, wheels) ? this.createStableWheelVisuals(root, wheels) : []
    const [leftDoor, rightDoor] = this.createRealDoorOverlays(root, body)
    ;[leftDoor, rightDoor].forEach((door) => {
      door.traverse((object) => {
        if (object instanceof Mesh) body.push(object)
      })
    })
    return { root, body, wheels, wheelVisuals, calipers, carbon, lights: controlledLights, interior, leftDoor, rightDoor }
  }

  /**
   * 记录原始材质 by AI.Coding
   * 后续配置只调校原材质参数，不再整块替换真实模型贴图，避免 Ferrari 变成塑料积木感。
   */
  private rememberOriginalMaterials(mesh: Mesh) {
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
    mesh.userData.originalMaterials = materials.map((material) => material.clone())
  }

  /**
   * 创建稳定轮胎展示 by AI.Coding
   * 第三方车轮 pivot 不稳定时，使用固定展示轮承载旋转动画，避免原模型轮胎上下跳动。
   */
  private createStableWheelVisuals(root: Group, sourceWheels: Mesh[]): Mesh[] {
    const box = new Box3().setFromObject(root)
    const size = box.getSize(new Vector3())
    const center = box.getCenter(new Vector3())
    // 真实 GLB 的轮毂常被合并或 pivot 错位；按包围盒最长轴识别车长，补足四轮并避免 M4 跳动。
    const lengthIsZ = size.z >= size.x
    const sideExtent = lengthIsZ ? size.x : size.z
    const lengthExtent = lengthIsZ ? size.z : size.x
    const radius = Math.max(0.2, sideExtent * 0.16)
    const tube = radius * 0.2
    const y = this.floor.position.y + radius + tube + 0.035
    const leftSide = (lengthIsZ ? center.x : center.z) + sideExtent * 0.43
    const rightSide = (lengthIsZ ? center.x : center.z) - sideExtent * 0.43
    const frontLong = (lengthIsZ ? center.z : center.x) + lengthExtent * 0.31
    const rearLong = (lengthIsZ ? center.z : center.x) - lengthExtent * 0.31
    const positions: Vector3[] = lengthIsZ
      ? [new Vector3(leftSide, y, frontLong), new Vector3(rightSide, y, frontLong), new Vector3(leftSide, y, rearLong), new Vector3(rightSide, y, rearLong)]
      : [new Vector3(frontLong, y, leftSide), new Vector3(frontLong, y, rightSide), new Vector3(rearLong, y, leftSide), new Vector3(rearLong, y, rightSide)]

    return this.createWheelVisualsAt(root, positions)
  }

  /**
   * 判断是否补偿稳定轮胎 by AI.Coding
   * 仅对轮轴合并或 pivot 异常的车型叠加展示轮，避免 Porsche 原厂轮胎被重复覆盖后显得乱套。
   */
  private shouldUseStableWheelVisuals(root: Group, car: CarModelConfig, sourceWheels: Mesh[]): boolean {
    if (typeof car.visualTuning?.stableWheelVisuals === 'boolean') return car.visualTuning.stableWheelVisuals
    return this.detectWheelCenters(root, sourceWheels).length < 4
  }

  /**
   * 判断是否补偿校准灯罩 by AI.Coding
   * 车型自带可控灯罩时不再叠加假灯片，防止车灯悬浮到车身外。
   */
  private shouldUseCalibratedLampOverlays(car: CarModelConfig, realLights: Mesh[]): boolean {
    if (typeof car.visualTuning?.calibratedLampOverlays === 'boolean') return car.visualTuning.calibratedLampOverlays
    return realLights.length < 4
  }

  /**
   * 识别真实轮心 by AI.Coding
   * Porsche 等模型保留了独立轮胎网格时，用真实轮胎中心定位旋转件，避免漂浮到车外。
   */
  private detectWheelCenters(root: Group, sourceWheels: Mesh[]): Vector3[] {
    const carBox = new Box3().setFromObject(root)
    const carSize = carBox.getSize(new Vector3())
    const maxWheelSize = Math.max(carSize.x, carSize.z) * 0.32
    const centers = sourceWheels
      .map((wheel) => {
        const box = new Box3().setFromObject(wheel)
        return { center: box.getCenter(new Vector3()), size: box.getSize(new Vector3()) }
      })
      .filter(({ size }) => size.length() > 0.08 && size.length() < maxWheelSize)
      .map(({ center }) => center)

    const unique: Vector3[] = []
    centers.forEach((center) => {
      if (!unique.some((item) => item.distanceTo(center) < 0.25)) unique.push(center)
    })
    return unique.sort((a, b) => a.x === b.x ? a.z - b.z : a.x - b.x)
  }

  /**
   * 按轮心创建旋转胎面 by AI.Coding
   * 所有真实车型统一使用该方法保证四条轮胎持续可见地旋转。
   */
  private createWheelVisualsAt(root: Group, positions: Vector3[]): Mesh[] {
    const tireTexture = this.createTireTreadTexture()
    const tireMaterial = new MeshPhysicalMaterial({ color: '#070708', map: tireTexture, roughness: 0.82, metalness: 0.02, clearcoat: 0.04 })
    const markerMaterial = new MeshBasicMaterial({ color: '#d9dde0' })
    const rimMaterial = new MeshPhysicalMaterial({ color: '#cfd3d4', roughness: 0.24, metalness: 0.85, clearcoat: 0.28 })
    const rootBox = new Box3().setFromObject(root)
    const rootSize = rootBox.getSize(new Vector3())
    const center = rootBox.getCenter(new Vector3())
    const lengthIsZ = rootSize.z >= rootSize.x
    const sideExtent = lengthIsZ ? rootSize.x : rootSize.z
    const radius = Math.max(0.18, sideExtent * 0.15)
    const tube = radius * 0.16
    return positions.map((worldPosition, index) => {
      const localPosition = root.worldToLocal(worldPosition.clone())
      const tire = new Mesh(new TorusGeometry(radius, tube, 24, 72), tireMaterial.clone())
      tire.name = `stable-tire-${index}`
      tire.position.copy(localPosition)
      tire.rotation.y = lengthIsZ ? Math.PI / 2 : 0
      tire.castShadow = true
      tire.receiveShadow = true
      tire.userData.spinAxis = (lengthIsZ ? 'x' : 'z') satisfies SpinAxis
      tire.userData.spinFactor = 3.2

      // 侧面浅色胎纹标记跟随父轮胎绕轴旋转，静态截图间也能确认轮胎确实在动。
      const sideSign = (lengthIsZ ? worldPosition.x >= center.x : worldPosition.z >= center.z) ? 1 : -1
      const marker = new Mesh(new BoxGeometry(radius * 0.12, radius * 0.58, tube * 0.62), markerMaterial.clone())
      marker.name = `spinning-tire-marker-${index}`
      marker.position.set(lengthIsZ ? sideSign * tube * 1.65 : 0, radius * 0.55, lengthIsZ ? 0 : sideSign * tube * 1.65)
      marker.castShadow = false
      tire.add(marker)

      const rim = new Mesh(new CylinderGeometry(radius * 0.58, radius * 0.58, tube * 1.8, 48), rimMaterial.clone())
      rim.name = `stable-rim-${index}`
      rim.rotation.x = lengthIsZ ? 0 : Math.PI / 2
      rim.castShadow = true
      tire.add(rim)

      for (let spokeIndex = 0; spokeIndex < 6; spokeIndex += 1) {
        const spoke = new Mesh(new BoxGeometry(radius * 0.08, radius * 0.95, tube * 0.28), rimMaterial.clone())
        spoke.name = `stable-rim-spoke-${index}-${spokeIndex}`
        spoke.rotation.z = (Math.PI / 6) * spokeIndex
        spoke.castShadow = true
        tire.add(spoke)
      }

      root.add(tire)
      return tire
    })
  }

  /**
   * 创建真实模型车门覆盖件 by AI.Coding
   * 当前授权 GLB 未拆分可旋转车门网格，因此用同材质车门面板贴合侧面并绕前铰链打开。
   */
  private createRealDoorOverlays(root: Group, body: Mesh[]): [Group, Group] {
    const box = new Box3().setFromObject(root)
    const size = box.getSize(new Vector3())
    const material = this.cloneDoorMaterial(body[0])
    const doorLength = Math.max(size.x, size.z) * 0.24
    const doorHeight = size.y * 0.36
    const thickness = Math.max(Math.min(size.x, size.z) * 0.016, 0.035)
    const centerX = box.min.x + size.x * 0.46
    const centerY = box.min.y + size.y * 0.46
    const makeDoor = (name: string, side: 1 | -1) => {
      const group = new Group()
      group.name = `${name}-real-door-pivot`
      const closedWorld = new Vector3(centerX, centerY, side > 0 ? box.max.z : box.min.z)
      const openWorld = closedWorld.clone().add(new Vector3(-size.x * 0.02, size.y * 0.26, side * size.z * 0.36))
      group.position.copy(root.worldToLocal(closedWorld.clone()))
      group.userData.openDirection = side
      group.userData.closedPosition = group.position.clone()
      group.userData.openPosition = root.worldToLocal(openWorld)
      group.visible = false

      const panel = new Mesh(new BoxGeometry(doorLength, doorHeight, thickness), material.clone())
      panel.name = `${name}-real-door-panel`
      panel.position.x = doorLength * 0.08
      panel.position.z = side * thickness
      panel.castShadow = true
      panel.receiveShadow = true
      group.add(panel)
      root.add(group)
      return group
    }

    return [makeDoor('left', 1), makeDoor('right', -1)]
  }

  /**
   * 克隆车门材质 by AI.Coding
   * 真实模型车门覆盖件沿用车身材质，使开门交互与当前车漆颜色保持一致。
   */
  private cloneDoorMaterial(source?: Mesh): MeshPhysicalMaterial {
    const material = source ? this.cloneOriginalOrCurrentMaterials(source)[0] : null
    const color = material instanceof MeshStandardMaterial || material instanceof MeshPhysicalMaterial ? material.color.clone() : new Color('#c9d1d3')
    return new MeshPhysicalMaterial({ color, metalness: 0.72, roughness: 0.22, clearcoat: 0.88, clearcoatRoughness: 0.1 })
  }

  /**
   * 创建轮胎纹理 by AI.Coding
   * 为补偿轮轴异常的 M4 展示轮生成胎纹贴图，让可旋转轮胎接近真实橡胶质感。
   */
  private createTireTreadTexture(): CanvasTexture {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#050506'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = '#1b1d20'
      ctx.lineWidth = 3
      for (let x = -32; x < canvas.width + 32; x += 14) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x + 32, canvas.height)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x + 18, canvas.height)
        ctx.lineTo(x + 50, 0)
        ctx.stroke()
      }
      ctx.strokeStyle = '#0d0e10'
      ctx.lineWidth = 2
      for (let y = 10; y < canvas.height; y += 14) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }
    const texture = new CanvasTexture(canvas)
    texture.colorSpace = SRGBColorSpace
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(3, 1)
    return texture
  }

  /**
   * 绑定真实灯组光源 by AI.Coding
   * 优先点亮 GLB 自带车灯材质，避免再用偏离车头的横条假灯冒充日行灯。
   */
  private attachRealLightSources(lights: Mesh[]) {
    lights.forEach((light) => {
      if (light.children.some((child) => child instanceof PointLight)) return
      const isTail = `${light.name} ${this.materialName(light)}`.toLowerCase().includes('tail') || `${light.name} ${this.materialName(light)}`.toLowerCase().includes('red')
      const glow = new PointLight(isTail ? '#ff2034' : '#d7fbff', 0, 2.4, 1.8)
      glow.name = `${light.name}-real-lamp-source`
      const localBox = new Box3().setFromObject(light)
      const center = localBox.getCenter(new Vector3())
      light.worldToLocal(center)
      glow.position.copy(center)
      light.add(glow)
    })
  }

  /**
   * 选择真实灯罩 by AI.Coding
   * 只控制位于车头/车尾端部且尺寸合理的原始灯罩网格，用位置判断前灯/尾灯，避免把尾灯错误刷成白色。
   */
  private pickControlledRealLights(root: Group, lights: Mesh[], car?: CarModelConfig): Mesh[] {
    const box = new Box3().setFromObject(root)
    const size = box.getSize(new Vector3())
    const center = box.getCenter(new Vector3())
    const lengthIsZ = size.z >= size.x
    const sideExtent = lengthIsZ ? size.x : size.z
    const lengthExtent = lengthIsZ ? size.z : size.x
    const frontSign = car?.id === 'bmw-m4-competition' ? -1 : 1
    return lights.filter((light) => {
      const lightBox = new Box3().setFromObject(light)
      const lightSize = lightBox.getSize(new Vector3())
      const lightCenter = lightBox.getCenter(new Vector3())
      const longOffset = (lengthIsZ ? lightCenter.z - center.z : lightCenter.x - center.x) * frontSign
      const maxDimension = Math.max(lightSize.x, lightSize.y, lightSize.z)
      const nearVehicleEnd = Math.abs(longOffset) > lengthExtent * 0.28
      const reasonableLampSize = maxDimension < sideExtent * 1.05
      if (!nearVehicleEnd || !reasonableLampSize) return false
      light.userData.isTailLamp = longOffset < 0
      this.attachRealLightSources([light])
      return true
    })
  }

  /**
   * 创建兜底车灯 by AI.Coding
   * 仅在模型完全没有可识别灯组时生成小型灯罩，尺寸贴近车灯而非横跨车身。
   */
  private createFallbackHeadlights(root: Group): Mesh[] {
    const box = new Box3().setFromObject(root)
    const size = box.getSize(new Vector3())
    const lengthIsZ = size.z >= size.x
    const sideExtent = lengthIsZ ? size.x : size.z
    const lampMaterial = new MeshPhysicalMaterial({ color: '#e6fbff', emissive: '#d7fbff', emissiveIntensity: 0, roughness: 0.08, transparent: true, opacity: 0.35 })
    const tailMaterial = new MeshPhysicalMaterial({ color: '#ff2034', emissive: '#ff2034', emissiveIntensity: 0, roughness: 0.1, transparent: true, opacity: 0.35 })
    const geometry = new BoxGeometry(sideExtent * 0.12, size.y * 0.025, sideExtent * 0.04)
    const y = box.min.y + size.y * 0.36
    const side = sideExtent * 0.28
    const makePosition = (front: boolean, left: boolean) => {
      const long = front ? (lengthIsZ ? box.max.z : box.max.x) : (lengthIsZ ? box.min.z : box.min.x)
      const cross = left ? side : -side
      return lengthIsZ ? new Vector3(cross, y, long) : new Vector3(long, y, cross)
    }
    const specs: Array<[string, Vector3, MeshPhysicalMaterial]> = [
      ['fallback-headlight-left', makePosition(true, true), lampMaterial],
      ['fallback-headlight-right', makePosition(true, false), lampMaterial],
      ['fallback-taillight-left', makePosition(false, true), tailMaterial],
      ['fallback-taillight-right', makePosition(false, false), tailMaterial],
    ]
    return specs.map(([name, worldPosition, material]) => {
      const light = new Mesh(geometry.clone(), material.clone())
      light.name = name
      light.position.copy(root.worldToLocal(worldPosition.clone()))
      const glow = new PointLight(name.includes('tail') ? '#ff2034' : '#d7fbff', 0, 2, 1.8)
      light.add(glow)
      root.add(light)
      return light
    })
  }

  /**
   * 创建校准灯罩 by AI.Coding
   * 在真实灯组材质之外叠加小型车灯形状，确保日行灯开关出现在车头灯/尾灯位置。
   */
  private createCalibratedLampOverlays(root: Group, car?: CarModelConfig): Mesh[] {
    const box = new Box3().setFromObject(root)
    const size = box.getSize(new Vector3())
    const center = box.getCenter(new Vector3())
    // 按包围盒最长轴识别车头/车尾，灯罩宽度只取车身窄轴，避免再次生成横跨场景的假灯条。
    const lengthIsZ = size.z >= size.x
    const sideExtent = lengthIsZ ? size.x : size.z
    const lengthExtent = lengthIsZ ? size.z : size.x
    const frontSign = car?.id === 'bmw-m4-competition' ? -1 : 1
    const front = (lengthIsZ ? center.z : center.x) + lengthExtent * 0.455 * frontSign
    const rear = (lengthIsZ ? center.z : center.x) - lengthExtent * 0.485 * frontSign
    const side = sideExtent * 0.23
    const y = box.min.y + size.y * 0.49
    const headMaterial = new MeshPhysicalMaterial({ color: '#e9fbff', emissive: '#d8fbff', emissiveIntensity: 0, roughness: 0.04, transparent: true, opacity: 0.12 })
    const tailMaterial = new MeshPhysicalMaterial({ color: '#ff2136', emissive: '#ff2136', emissiveIntensity: 0, roughness: 0.08, transparent: true, opacity: 0.12 })
    const geometry = new SphereGeometry(sideExtent * 0.045, 24, 14)
    const makeWorldPosition = (long: number, cross: number) => (lengthIsZ ? new Vector3(center.x + cross, y, long) : new Vector3(long, y, center.z + cross))
    const specs: Array<[string, Vector3, MeshPhysicalMaterial]> = [
      ['calibrated-headlight-left', makeWorldPosition(front, side), headMaterial],
      ['calibrated-headlight-right', makeWorldPosition(front, -side), headMaterial],
      ['calibrated-taillight-left', makeWorldPosition(rear, side), tailMaterial],
      ['calibrated-taillight-right', makeWorldPosition(rear, -side), tailMaterial],
    ]
    return specs.map(([name, worldPosition, material]) => {
      const lamp = new Mesh(geometry.clone(), material.clone())
      lamp.name = name
      lamp.position.copy(root.worldToLocal(worldPosition.clone()))
      const isHeadlight = name.includes('headlight')
      lamp.scale.set(lengthIsZ ? (isHeadlight ? 2.9 : 1.65) : 0.5, isHeadlight ? 0.82 : 0.55, lengthIsZ ? 0.5 : (isHeadlight ? 2.9 : 1.65))
      lamp.castShadow = false
      const glow = new PointLight(name.includes('tail') ? '#ff2136' : '#d8fbff', 0, 2.2, 1.8)
      lamp.add(glow)
      root.add(lamp)
      return lamp
    })
  }

  /**
   * 获取材质名称 by AI.Coding
   * 多材质模型取所有材质名参与插槽识别，提高第三方 GLB 兼容率。
   */
  private materialName(mesh: Mesh): string {
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
    return materials.map((material) => material.name).join(' ')
  }

  /**
   * 匹配名称片段 by AI.Coding
   * 统一处理真实模型中大小写和命名风格不一致的问题。
   */
  private matchesAny(value: string, tokens: string[]): boolean {
    return tokens.some((token) => value.includes(token))
  }

  /**
   * 选择主体网格 by AI.Coding
   * 当模型没有清晰车漆命名时，用较大的外壳网格作为车身颜色配置目标。
   */
  private pickLargestBodyMeshes(meshes: Mesh[]): Mesh[] {
    return meshes
      .map((mesh) => ({ mesh, size: new Box3().setFromObject(mesh).getSize(new Vector3()).length() }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 4)
      .map((item) => item.mesh)
  }

  /**
   * 释放游离模型 by AI.Coding
   * 异步加载被新车型打断时清掉已下载但未挂载的模型资源。
   */
  private disposeLooseRoot(root: Object3D) {
    root.traverse((object) => {
      if (!(object instanceof Mesh)) return
      object.geometry.dispose()
      const materials = Array.isArray(object.material) ? object.material : [object.material]
      materials.forEach((material) => material.dispose())
    })
  }

  /**
   * 配置渲染器 by AI.Coding
   * 设置色彩管理、阴影和像素比上限，符合汽车摄影棚质感需求。
   */
  private configureRenderer() {
    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.45
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = PCFSoftShadowMap
    this.renderer.setClearColor(0x000000, 0)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  /**
   * 配置场景 by AI.Coding
   * 创建渐变环境、摄影棚柔光和车辆接地阴影。
   */
  private configureScene() {
    this.scene.background = new Color('#111318')
    this.camera.position.set(5.2, 2.25, 5.8)
    this.camera.lookAt(this.clockTarget)

    const ambient = new AmbientLight('#e8f0ff', 2.25)
    const key = new DirectionalLight('#ffffff', 5.4)
    key.position.set(-4.8, 8.6, 5.8)
    key.castShadow = true
    key.shadow.mapSize.set(2048, 2048)

    const rim = new DirectionalLight('#9edcff', 2.45)
    rim.position.set(4.2, 3.1, -5.8)
    const frontFill = new PointLight('#fff3d0', 95, 10, 1.6)
    frontFill.position.set(3.2, 2.1, 2.6)
    const roofSoftbox = new RectAreaLight('#ffffff', 5.6, 6.8, 3.2)
    roofSoftbox.position.set(0, 4.2, 0.4)
    roofSoftbox.lookAt(0, 0.2, 0)
    const sideSoftbox = new RectAreaLight('#cfeaff', 3.8, 4.2, 2.4)
    sideSoftbox.position.set(-3.8, 2.1, -3.2)
    sideSoftbox.lookAt(0, 0.25, 0)

    this.scene.add(ambient, key, rim, frontFill, roofSoftbox, sideSoftbox, this.floor, this.environmentGroup)
  }

  /**
   * 创建地面 by AI.Coding
   * 地面对象保持引用，后续场景风格切换时只替换材质和环境件。
   */
  private createFloor(): Mesh {
    const floor = new Mesh(
      new PlaneGeometry(520, 360),
      new MeshPhysicalMaterial({ color: '#20242a', roughness: 0.36, metalness: 0.2, clearcoat: 0.35, clearcoatRoughness: 0.22 }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.42
    floor.receiveShadow = true
    return floor
  }

  /**
   * 配置控制器 by AI.Coding
   * 支持桌面拖拽、滚轮缩放和移动端手势。
   */
  private configureControls() {
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.065
    this.controls.minDistance = 3.2
    this.controls.maxDistance = 9
    this.controls.maxPolarAngle = Math.PI * 0.48
    this.controls.target.copy(this.clockTarget)
  }

  /**
   * 创建程序化跑车 by AI.Coding
   * 在没有授权 GLB 资产时构建可交互占位模型，覆盖材质和配置器体验。
   */
  private createProceduralCar(): CarParts {
    const root = new Group()
    root.name = 'procedural-supercar'
    const body: Mesh[] = []
    const wheels: Mesh[] = []
    const wheelVisuals: Mesh[] = []
    const calipers: Mesh[] = []
    const carbon: Mesh[] = []
    const lights: Mesh[] = []
    const interior: Mesh[] = []

    const paint = this.createPaintMaterial('#c9d1d3', 'metallic')
    const glass = new MeshPhysicalMaterial({ color: '#7aa9c7', metalness: 0, roughness: 0.04, transmission: 0.42, transparent: true, opacity: 0.52 })
    const carbonMaterial = this.createCarbonMaterial()
    const tireMaterial = new MeshPhysicalMaterial({ color: '#050505', roughness: 0.88, metalness: 0.02, normalScale: new Vector2(0.25, 0.25) })
    const wheelMaterial = new MeshPhysicalMaterial({ color: '#101216', roughness: 0.22, metalness: 0.78 })
    const lightMaterial = new MeshPhysicalMaterial({ color: '#dff7ff', emissive: '#7feaff', emissiveIntensity: 0.7, roughness: 0.1 })
    const leather = new MeshPhysicalMaterial({ color: '#141316', roughness: 0.64, metalness: 0.02 })

    const lowerBody = this.createRoundedBox(4.45, 0.52, 1.72, paint)
    lowerBody.name = 'body-shell'
    lowerBody.position.y = 0.2
    lowerBody.castShadow = true
    body.push(lowerBody)

    const hood = this.createWedge(1.8, 0.28, 1.5, paint)
    hood.name = 'front-hood'
    hood.position.set(1.18, 0.58, 0)
    hood.rotation.z = -0.03
    hood.castShadow = true
    body.push(hood)

    const cabin = this.createWedge(1.62, 0.78, 1.34, glass)
    cabin.name = 'windshield'
    cabin.position.set(-0.34, 0.94, 0)
    cabin.rotation.z = 0.03
    cabin.castShadow = true

    const rearDeck = this.createWedge(1.35, 0.25, 1.46, paint)
    rearDeck.name = 'rear-deck'
    rearDeck.position.set(-1.36, 0.61, 0)
    rearDeck.rotation.z = 0.08
    rearDeck.castShadow = true
    body.push(rearDeck)

    const leftDoor = this.createDoorGroup('door-left', 0.18, paint)
    const rightDoor = this.createDoorGroup('door-right', -0.18, paint)
    body.push(leftDoor.children[0] as Mesh, rightDoor.children[0] as Mesh)

    const frontLip = this.createRoundedBox(1.35, 0.08, 1.86, carbonMaterial)
    frontLip.name = 'front-lip'
    frontLip.position.set(2.28, -0.05, 0)
    carbon.push(frontLip)

    const sideSkirtLeft = this.createRoundedBox(2.5, 0.1, 0.08, carbonMaterial)
    sideSkirtLeft.name = 'side-skirt'
    sideSkirtLeft.position.set(0, -0.03, 0.91)
    const sideSkirtRight = sideSkirtLeft.clone()
    sideSkirtRight.position.z = -0.91
    carbon.push(sideSkirtLeft, sideSkirtRight)

    const wing = this.createRoundedBox(1.28, 0.08, 1.62, carbonMaterial)
    wing.name = 'wing'
    wing.position.set(-2.15, 0.98, 0)
    carbon.push(wing)

    const diffuser = this.createRoundedBox(0.18, 0.16, 1.58, carbonMaterial)
    diffuser.name = 'diffuser'
    diffuser.position.set(-2.32, 0.02, 0)
    carbon.push(diffuser)

    const wheelPositions = [
      [1.42, -0.18, 0.94],
      [1.42, -0.18, -0.94],
      [-1.45, -0.18, 0.94],
      [-1.45, -0.18, -0.94],
    ] as const
    wheelPositions.forEach(([x, y, z], index) => {
      const tire = new Mesh(new TorusGeometry(0.39, 0.13, 22, 72), tireMaterial)
      tire.name = `tire-${index}`
      tire.rotation.y = Math.PI / 2
      tire.position.set(x, y, z)
      tire.castShadow = true

      const rim = new Mesh(new CylinderGeometry(0.3, 0.3, 0.11, 48), wheelMaterial)
      rim.name = `wheel-${index}`
      rim.rotation.z = Math.PI / 2
      rim.position.copy(tire.position)
      rim.castShadow = true

      const caliper = new Mesh(new BoxGeometry(0.1, 0.2, 0.08), new MeshPhysicalMaterial({ color: '#e31f2f', roughness: 0.28, metalness: 0.35 }))
      caliper.name = `caliper-${index}`
      caliper.position.set(x + 0.05, y + 0.08, z > 0 ? z - 0.18 : z + 0.18)
      caliper.castShadow = true

      wheels.push(tire, rim)
      calipers.push(caliper)
    })

    const headLeft = this.createLight('headlight-left', 2.28, 0.38, 0.48, lightMaterial)
    const headRight = this.createLight('headlight-right', 2.28, 0.38, -0.48, lightMaterial)
    const tailLeft = this.createLight('taillight-left', -2.28, 0.4, 0.53, lightMaterial)
    const tailRight = this.createLight('taillight-right', -2.28, 0.4, -0.53, lightMaterial)
    lights.push(headLeft, headRight, tailLeft, tailRight)

    const seatLeft = this.createRoundedBox(0.42, 0.46, 0.32, leather)
    seatLeft.name = 'seat-left'
    seatLeft.position.set(-0.45, 0.58, 0.32)
    const seatRight = seatLeft.clone()
    seatRight.name = 'seat-right'
    seatRight.position.z = -0.32
    const dashboard = this.createRoundedBox(0.16, 0.16, 1.0, leather)
    dashboard.name = 'dashboard'
    dashboard.position.set(0.22, 0.72, 0)
    interior.push(seatLeft, seatRight, dashboard)

    root.add(lowerBody, hood, cabin, rearDeck, leftDoor, rightDoor, frontLip, sideSkirtLeft, sideSkirtRight, wing, diffuser, ...wheels, ...calipers, ...lights, ...interior)

    root.rotation.y = -0.45
    return { root, body, wheels, wheelVisuals, calipers, carbon, lights, interior, leftDoor, rightDoor }
  }

  /**
   * 创建圆润车身块 by AI.Coding
   * 用缩放后的盒体模拟低趴车身，并统一阴影设置。
   */
  private createRoundedBox(width: number, height: number, depth: number, material: MeshPhysicalMaterial): Mesh {
    const mesh = new Mesh(new BoxGeometry(width, height, depth, 4, 2, 4), material)
    mesh.castShadow = true
    mesh.receiveShadow = true
    return mesh
  }

  /**
   * 创建楔形部件 by AI.Coding
   * 用 ShapeGeometry 生成前盖、座舱和尾部的跑车坡面。
   */
  private createWedge(width: number, height: number, depth: number, material: MeshPhysicalMaterial): Mesh {
    const geometry = new BoxGeometry(width, height, depth, 4, 2, 3)
    const mesh = new Mesh(geometry, material)
    mesh.scale.y = 0.92
    mesh.castShadow = true
    mesh.receiveShadow = true
    return mesh
  }

  /**
   * 创建车门组 by AI.Coding
   * 设置旋转轴位置，使开门动画有剪刀门的视觉暗示。
   */
  private createDoorGroup(name: string, zDirection: number, material: MeshPhysicalMaterial): Group {
    const group = new Group()
    group.name = `${name}-pivot`
    group.position.set(0.18, 0.38, zDirection > 0 ? 0.9 : -0.9)
    const door = this.createRoundedBox(1.12, 0.42, 0.05, material)
    door.name = name
    door.position.set(-0.18, 0, 0)
    group.add(door)
    return group
  }

  /**
   * 创建灯组 by AI.Coding
   * 使用自发光材质表现日行灯和尾灯。
   */
  private createLight(name: string, x: number, y: number, z: number, material: MeshPhysicalMaterial): Mesh {
    const light = new Mesh(new BoxGeometry(0.08, 0.08, 0.42), material)
    light.name = name
    light.position.set(x, y, z)
    light.castShadow = false
    return light
  }

  /**
   * 创建车漆材质 by AI.Coding
   * 根据金属、哑光、珠光和赛车涂装调整清漆层参数。
   */
  private createPaintMaterial(hex: string, finish: ColorOption['finish']): MeshPhysicalMaterial {
    const matte = finish === 'matte'
    return new MeshPhysicalMaterial({
      color: hex,
      metalness: matte ? 0.28 : 0.78,
      roughness: matte ? 0.48 : 0.2,
      clearcoat: matte ? 0.28 : 0.95,
      clearcoatRoughness: finish === 'pearl' ? 0.05 : 0.09,
      envMapIntensity: finish === 'racing' ? 1.7 : 1.25,
    })
  }

  /**
   * 创建碳纤维材质 by AI.Coding
   * 使用 CanvasTexture 生成斜纹纹理，避免依赖外部贴图。
   */
  private createCarbonMaterial(): MeshPhysicalMaterial {
    const canvas = document.createElement('canvas')
    canvas.width = 96
    canvas.height = 96
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#08090a'
      ctx.fillRect(0, 0, 96, 96)
      ctx.strokeStyle = '#2d3338'
      ctx.lineWidth = 5
      for (let i = -96; i < 192; i += 14) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i + 96, 96)
        ctx.stroke()
      }
    }
    const map = new CanvasTexture(canvas)
    map.colorSpace = SRGBColorSpace
    return new MeshPhysicalMaterial({ color: '#111417', map, metalness: 0.55, roughness: 0.24, clearcoat: 0.75, clearcoatRoughness: 0.08 })
  }

  /**
   * 应用车漆 by AI.Coding
   * 为所有车身插槽替换同一套高反射物理材质。
   */
  private applyPaint(color: ColorOption) {
    this.carParts.body.forEach((part) => {
      const materials = this.cloneOriginalOrCurrentMaterials(part)
      materials.forEach((material) => this.tunePaintMaterial(material, color))
      part.material = Array.isArray(part.material) ? materials : materials[0]
    })
  }

  /**
   * 应用轮毂 by AI.Coding
   * 更新稳定轮毂展示件颜色，原始 GLB 轮胎不再直接旋转，避免错误 pivot 导致跳动。
   */
  private applyWheels(wheel: WheelOption) {
    this.carParts.wheelVisuals.forEach((part) => {
      part.userData.spinFactor = wheel.spokeCount / 10
    })
  }

  /**
   * 克隆原材质 by AI.Coding
   * 每次配置从 GLB 原始材质重新派生，避免多次切换颜色后贴图和 roughness 参数丢失。
   */
  private cloneOriginalOrCurrentMaterials(mesh: Mesh): Material[] {
    const original = mesh.userData.originalMaterials as Material[] | undefined
    const source = original ?? (Array.isArray(mesh.material) ? mesh.material : [mesh.material])
    return source.map((material) => material.clone())
  }

  /**
   * 调校车漆材质 by AI.Coding
   * 保留原贴图和法线，只改颜色、清漆和金属粗糙度，修复 Ferrari 贴图被替换成积木感的问题。
   */
  private tunePaintMaterial(material: Material, color: ColorOption) {
    if (!(material instanceof MeshStandardMaterial || material instanceof MeshPhysicalMaterial)) return
    const matte = color.finish === 'matte'
    material.color = new Color(color.hex)
    material.metalness = matte ? Math.min(material.metalness, 0.35) : Math.max(material.metalness, 0.62)
    material.roughness = matte ? Math.max(material.roughness, 0.44) : Math.min(Math.max(material.roughness, 0.16), 0.32)
    if (material instanceof MeshPhysicalMaterial) {
      material.clearcoat = matte ? 0.28 : 0.9
      material.clearcoatRoughness = color.finish === 'pearl' ? 0.05 : 0.1
    }
    material.needsUpdate = true
  }

  /**
   * 应用卡钳 by AI.Coding
   * 使用高饱和材质让刹车卡钳在轮毂后方清晰可辨。
   */
  private applyBrakeCalipers(color: ColorOption) {
    const material = new MeshPhysicalMaterial({ color: color.hex, roughness: 0.25, metalness: 0.38, clearcoat: 0.45 })
    this.carParts.calipers.forEach((part) => {
      part.material = material
    })
  }

  /**
   * 应用外观套件 by AI.Coding
   * 按套件配置显隐碳纤维前唇、侧裙、尾翼和扩散器。
   */
  private applyCarbonKits(kitIds: string[]) {
    const enabled = new Set(kitIds)
    this.carParts.carbon.forEach((part) => {
      part.visible =
        part.name === 'diffuser' ||
        (part.name === 'front-lip' && enabled.has('front-lip')) ||
        (part.name === 'side-skirt' && enabled.has('side-skirt')) ||
        (part.name === 'wing' && enabled.has('active-wing'))
    })
  }

  /**
   * 应用内饰 by AI.Coding
   * 更新座椅和仪表台颜色，隔着玻璃也能看到主题变化。
   */
  private applyInterior(interior: InteriorOption) {
    const material = new MeshPhysicalMaterial({ color: interior.primary, roughness: 0.62, metalness: 0.03 })
    this.carParts.interior.forEach((part) => {
      part.material = material
    })
  }

  /**
   * 应用灯光模式 by AI.Coding
   * 调整自发光强度并保留关闭状态下的灯罩材质。
   */
  private applyLights(lightMode: LightModeOption) {
    this.carParts.lights.forEach((part) => {
      const materials = Array.isArray(part.material) ? part.material : [part.material]
      materials.forEach((material) => {
        if (!(material instanceof MeshStandardMaterial || material instanceof MeshPhysicalMaterial)) return
        const isTail = Boolean(part.userData.isTailLamp) || part.name.includes('tail')
        material.emissive = new Color(isTail ? '#ff2034' : '#c8fbff')
        material.emissiveIntensity = lightMode.intensity * 5.2
        material.opacity = lightMode.intensity === 0 && part.name.includes('calibrated') ? 0.08 : 0.96
        material.transparent = true
        material.needsUpdate = true
      })
      part.children.forEach((child) => {
        const isTail = Boolean(part.userData.isTailLamp) || part.name.includes('tail')
        if (child instanceof PointLight) child.intensity = lightMode.intensity * (isTail ? 3.2 : 4.6)
      })
    })
  }

  /**
   * 应用画质 by AI.Coding
   * 根据用户选择和设备像素比调整渲染成本。
   */
  private applyQuality(level: QualityLevel) {
    const mobile = level === 'mobile' || (level === 'auto' && window.innerWidth < 760)
    const ratio = mobile ? Math.min(window.devicePixelRatio, 1.25) : level === 'high' ? Math.min(window.devicePixelRatio, 2) : Math.min(window.devicePixelRatio, 1.5)
    this.renderer.setPixelRatio(ratio)
  }

  /**
   * 应用展示场景 by AI.Coding
   * 切换城市道路、沙滩、草坪和废墟等真实风格，同时保留用户手动旋转视角。
   */
  private applySceneStyle(style: SceneStyle) {
    if (this.appliedSceneStyle === style) return
    this.appliedSceneStyle = style
    this.container.dataset.sceneStyle = style
    this.clearEnvironmentGroup()
    const palette: Record<SceneStyle, { sky: string; ground: string; roughness: number; metalness: number; opacity: number }> = {
      studio: { sky: '#111318', ground: '#20242a', roughness: 0.36, metalness: 0.2, opacity: 1 },
      'city-road': { sky: '#263342', ground: '#202124', roughness: 0.72, metalness: 0.04, opacity: 0.9 },
      beach: { sky: '#79b8d9', ground: '#d7bd7b', roughness: 0.94, metalness: 0.01, opacity: 0.78 },
      grassland: { sky: '#7db4da', ground: '#2f6a35', roughness: 0.96, metalness: 0.01, opacity: 0.74 },
      ruins: { sky: '#2a2926', ground: '#383633', roughness: 0.88, metalness: 0.03, opacity: 0.78 },
      other: { sky: '#080b14', ground: '#161821', roughness: 0.48, metalness: 0.16, opacity: 0.82 },
    }
    const selected = palette[style]
    this.scene.background = style === 'studio' ? new Color(selected.sky) : null
    const map = this.createSceneSurfaceTexture(style)
    // 真实世界场景下让地面略透明，CSS 照片背景可以穿透到远景和地平线，避免仍像纯色摄影棚。
    this.floor.material = new MeshPhysicalMaterial({
      color: selected.ground,
      map,
      roughness: selected.roughness,
      metalness: selected.metalness,
      clearcoat: style === 'studio' || style === 'other' ? 0.3 : 0.02,
      transparent: style !== 'studio',
      opacity: selected.opacity,
    })
    this.buildEnvironmentDetails(style)
  }

  /**
   * 清理环境件 by AI.Coding
   * 场景切换时释放旧的路缘、草带、废墟块等几何体与材质。
   */
  private clearEnvironmentGroup() {
    this.environmentGroup.traverse((object) => {
      if (!(object instanceof Mesh)) return
      object.geometry.dispose()
      const materials = Array.isArray(object.material) ? object.material : [object.material]
      materials.forEach((material) => material.dispose())
    })
    this.environmentGroup.clear()
  }

  /**
   * 创建场景地表纹理 by AI.Coding
   * 用 canvas 生成道路线、沙纹、草地和废墟裂纹，避免引入不可审计外部贴图。
   */
  private createSceneSurfaceTexture(style: SceneStyle): CanvasTexture {
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const baseColors: Record<SceneStyle, string> = {
        studio: '#20242a',
        'city-road': '#202124',
        beach: '#d8c28e',
        grassland: '#315f32',
        ruins: '#3b3935',
        other: '#18191f',
      }
      ctx.fillStyle = baseColors[style]
      ctx.fillRect(0, 0, 256, 256)
      for (let i = 0; i < 90; i += 1) {
        const x = (i * 47) % 256
        const y = (i * 83) % 256
        ctx.globalAlpha = style === 'beach' || style === 'grassland' ? 0.12 : 0.08
        ctx.strokeStyle = style === 'beach' ? '#f7e7ad' : style === 'grassland' ? '#87c45e' : style === 'ruins' ? '#5b5750' : '#ffffff'
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo((x + 24 + (i % 9) * 5) % 256, (y + 8 + (i % 7) * 9) % 256)
        ctx.stroke()
      }
      ctx.globalAlpha = 1
      if (style === 'beach') {
        ctx.strokeStyle = '#caa969'
        ctx.lineWidth = 3
        for (let y = 18; y < 256; y += 24) {
          ctx.beginPath()
          for (let x = 0; x <= 256; x += 16) {
            const waveY = y + Math.sin((x + y) * 0.08) * 4
            x === 0 ? ctx.moveTo(x, waveY) : ctx.lineTo(x, waveY)
          }
          ctx.stroke()
        }
      }
      if (style === 'grassland') {
        ctx.strokeStyle = '#b7d681'
        ctx.lineWidth = 2
        for (let x = 6; x < 256; x += 11) {
          ctx.beginPath()
          ctx.moveTo(x, 256)
          ctx.lineTo(x + ((x % 3) - 1) * 6, 236 - (x % 19))
          ctx.stroke()
        }
      }
      if (style === 'ruins') {
        ctx.strokeStyle = '#1e1d1b'
        ctx.lineWidth = 5
        for (let x = 12; x < 256; x += 42) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x + 26, 256)
          ctx.stroke()
        }
      }
      if (style === 'city-road' || style === 'ruins') {
        ctx.strokeStyle = style === 'ruins' ? '#1f1f1f' : '#e8d46b'
        ctx.lineWidth = 8
        ctx.setLineDash([36, 26])
        ctx.beginPath()
        ctx.moveTo(128, 0)
        ctx.lineTo(128, 256)
        ctx.stroke()
      }
    }
    const texture = new CanvasTexture(canvas)
    texture.colorSpace = SRGBColorSpace
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set(5, 4)
    return texture
  }

  /**
   * 创建环境细节 by AI.Coding
   * 用低成本几何体提示城市、海边、草坪、废墟和夜色展台的真实空间感。
   */
  private buildEnvironmentDetails(style: SceneStyle) {
    const addBlock = (name: string, x: number, y: number, z: number, w: number, h: number, d: number, color: string, roughness = 0.72) => {
      const mesh = new Mesh(new BoxGeometry(w, h, d), new MeshPhysicalMaterial({ color, roughness, metalness: 0.02 }))
      mesh.name = name
      mesh.position.set(x, y, z)
      mesh.castShadow = true
      mesh.receiveShadow = true
      this.environmentGroup.add(mesh)
    }
    const addGroundPlane = (name: string, x: number, z: number, w: number, d: number, color: string, opacity = 0.72) => {
      const mesh = new Mesh(new PlaneGeometry(w, d), new MeshPhysicalMaterial({ color, roughness: 0.86, metalness: 0.01, transparent: true, opacity }))
      mesh.name = name
      mesh.rotation.x = -Math.PI / 2
      mesh.position.set(x, this.floor.position.y + 0.012, z)
      mesh.receiveShadow = true
      this.environmentGroup.add(mesh)
    }
    if (style === 'city-road') {
      addBlock('city-curb-left', -4.8, -0.28, -4.6, 10, 0.16, 0.18, '#b8b8ad')
      addBlock('city-curb-right', 4.8, -0.28, 4.6, 10, 0.16, 0.18, '#b8b8ad')
      addBlock('city-skyline', 0, 1.2, -6.8, 8, 3, 0.18, '#202a35')
    }
    if (style === 'beach') {
      // 沙滩场景用湿沙、水线和木栈道压住比例，避免像纯色棚拍地板。
      addGroundPlane('beach-wet-sand', 0, -2.6, 15, 2.4, '#b98e55', 0.42)
      addGroundPlane('beach-water-edge', 0, -5.2, 16, 2.2, '#42a8c6', 0.54)
      addBlock('beach-boardwalk', -4.2, -0.37, 2.9, 3.8, 0.05, 0.72, '#8f6b45', 0.64)
      addBlock('beach-boardwalk-shadow', -4.2, -0.405, 2.9, 3.9, 0.02, 0.78, '#4c351f', 0.9)
    }
    if (style === 'grassland') {
      // 草坪场景用多层草带和远处低丘形成自然过渡，不再只靠一整块绿色。
      addGroundPlane('grass-close-variation', 0, 1.2, 18, 5.2, '#3d7d3c', 0.36)
      addGroundPlane('grass-distant-variation', 0, -5.6, 24, 4.8, '#27552b', 0.3)
      addBlock('grass-low-ridge-left', -6.8, -0.38, -6.2, 3.8, 0.06, 0.42, '#315f32', 0.96)
      addBlock('grass-low-ridge-right', 6.8, -0.38, -6.0, 3.2, 0.06, 0.38, '#3d7139', 0.96)
    }
    if (style === 'ruins') {
      // 废墟场景保持障碍物贴边和低位碎石，避免大块墙体抢走汽车主体。
      addGroundPlane('ruins-dust-layer', 0, 0.6, 14, 6.6, '#4b4740', 0.28)
      addBlock('ruins-wall-left', -7.0, 0.12, -4.8, 0.32, 0.92, 1.0, '#56514a', 0.82)
      addBlock('ruins-wall-right', 7.0, 0.04, 4.8, 0.36, 0.76, 0.9, '#4a4845', 0.84)
      addBlock('ruins-debris-a', -2.8, -0.34, 3.8, 1.4, 0.12, 0.7, '#34312e', 0.95)
      addBlock('ruins-debris-b', 2.9, -0.35, -3.3, 1.1, 0.1, 0.62, '#5a554d', 0.95)
    }
    if (style === 'other') {
      // 夜色展台增加低位发光跑道，和背景城市夜景形成真实的展台光源关系。
      addGroundPlane('night-platform-sheen', 0, 0, 9, 7, '#1e2430', 0.44)
      addBlock('night-light-strip-left', -3.8, -0.34, 0, 0.12, 0.04, 9, '#87d7ff', 0.36)
      addBlock('night-light-strip-right', 3.8, -0.34, 0, 0.12, 0.04, 9, '#ff4160', 0.36)
    }
  }

  /**
   * 动画车门 by AI.Coding
   * 使用 GSAP 平滑打开或关闭左右车门。
   */
  private animateDoors(open: boolean) {
    const leftDirection = this.carParts.leftDoor.userData.openDirection ?? 1
    const rightDirection = this.carParts.rightDoor.userData.openDirection ?? -1
    this.animateDoorOverlay(this.carParts.leftDoor, leftDirection, open)
    this.animateDoorOverlay(this.carParts.rightDoor, rightDirection, open)
  }

  /**
   * 动画真实模型覆盖车门 by AI.Coding
   * 授权 GLB 未拆门时，打开态显示外摆门板，关闭后隐藏，避免伪门板盖住原车身。
   */
  private animateDoorOverlay(door: Group, direction: number, open: boolean) {
    const closed = (door.userData.closedPosition as Vector3 | undefined)?.clone() ?? door.position.clone()
    const opened = (door.userData.openPosition as Vector3 | undefined)?.clone() ?? closed.clone()
    if (open) door.visible = true
    gsap.to(door.rotation, {
      y: open ? -0.78 * direction : 0,
      z: open ? 0.52 * direction : 0,
      duration: 0.75,
      ease: 'power3.out',
    })
    gsap.to(door.position, {
      x: open ? opened.x : closed.x,
      y: open ? opened.y : closed.y,
      z: open ? opened.z : closed.z,
      duration: 0.75,
      ease: 'power3.out',
      onComplete: () => {
        if (!open) door.visible = false
      },
    })
  }

  /**
   * 移动镜头 by AI.Coding
   * 按预设给出外观、前脸、侧面、尾部、内饰和轮毂视角。
   */
  private moveCamera(preset: CameraPreset) {
    const [x, y, z, targetY] = this.resolveCameraPreset(preset)
    gsap.to(this.camera.position, { x, y, z, duration: 0.85, ease: 'power3.inOut', onUpdate: () => this.camera.lookAt(this.controls.target) })
    gsap.to(this.controls.target, { x: preset === 'wheel' ? 1.04 : 0, y: targetY, z: preset === 'wheel' ? 1.05 : 0, duration: 0.85, ease: 'power3.inOut' })
  }

  /**
   * 计算车型镜头 by AI.Coding
   * 不同 GLB 车头朝向不一致，按包围盒长轴和车型前向校准前脸/尾部，避免点击前脸却看到车尾。
   */
  private resolveCameraPreset(preset: CameraPreset): [number, number, number, number] {
    const box = new Box3().setFromObject(this.carParts.root)
    const size = box.getSize(new Vector3())
    const lengthIsZ = size.z >= size.x
    const frontSign = this.activeCarId === 'bmw-m4-competition' ? -1 : 1
    const frontDistance = 5.8
    const sideDistance = 6.2
    if (preset === 'front') return lengthIsZ ? [0.05, 1.36, frontDistance * frontSign, 0.52] : [frontDistance * frontSign, 1.36, 0.05, 0.52]
    if (preset === 'rear') return lengthIsZ ? [0.35, 1.55, -frontDistance * frontSign, 0.55] : [-frontDistance * frontSign, 1.55, -0.3, 0.55]
    if (preset === 'side') return lengthIsZ ? [sideDistance, 1.25, 0.2, 0.45] : [0.2, 1.25, sideDistance, 0.45]
    if (preset === 'wheel') return lengthIsZ ? [2.1, 0.72, frontSign * 2.8, 0.12] : [3.35, 0.72, 1.55, 0.12]
    if (preset === 'interior') return lengthIsZ ? [0.95, 1.35, frontSign * 0.85, 0.92] : [0.45, 1.35, 1.25, 0.92]
    return lengthIsZ ? [4.9, 2.25, 5.8 * frontSign, 0.65] : [5.2, 2.25, 5.8, 0.65]
  }

  /**
   * 处理点击拾取 by AI.Coding
   * 将 Three.js 命中的 mesh 映射为业务部件热点。
   */
  private handlePointerDown = (event: PointerEvent) => {
    const rect = this.renderer.domElement.getBoundingClientRect()
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hits = this.raycaster.intersectObjects(this.carParts.root.children, true)
    const hit = hits[0]?.object
    if (!hit) return
    const part = this.mapObjectToPart(hit)
    if (part) this.onHotspot(part)
  }

  /**
   * 映射点击部件 by AI.Coding
   * 用 mesh 名称判断热点分类，减少 UI 与模型结构的耦合。
   */
  private mapObjectToPart(object: Object3D): FocusPart | null {
    const name = object.name
    if (name.includes('wheel') || name.includes('tire') || name.includes('caliper')) return 'wheel'
    if (name.includes('light')) return 'light'
    if (name.includes('seat') || name.includes('dashboard') || name.includes('windshield')) return 'interior'
    if (name.includes('lip') || name.includes('skirt') || name.includes('wing') || name.includes('diffuser')) return 'carbon'
    if (name.includes('body') || name.includes('door') || name.includes('hood')) return 'body'
    return null
  }

  /**
   * 可见性处理 by AI.Coding
   * 页面隐藏时暂停高频渲染，降低资源占用。
   */
  private handleVisibility = () => {
    this.isVisible = document.visibilityState === 'visible'
  }

  /**
   * 渲染循环 by AI.Coding
   * 更新控制器、轮毂慢速预览旋转并渲染画面。
   */
  private animate = () => {
    if (this.isDisposed) return
    this.animationFrame = requestAnimationFrame(this.animate)
    if (!this.isVisible) return
    this.controls.update()
    const spinningWheels = this.carParts.wheelVisuals.length > 0 ? this.carParts.wheelVisuals : this.carParts.wheels
    spinningWheels.forEach((wheel) => {
      const spin = 0.042 * (wheel.userData.spinFactor ?? 1)
      const axis = (wheel.userData.spinAxis ?? 'x') as SpinAxis
      wheel.rotation[axis] += spin
    })
    this.carParts.root.rotation.y += 0.0008
    this.renderer.render(this.scene, this.camera)
  }
}
