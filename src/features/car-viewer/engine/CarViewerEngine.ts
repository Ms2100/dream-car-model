import { gsap } from 'gsap'
import {
  ACESFilmicToneMapping,
  AmbientLight,
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Shape,
  ShapeGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type {
  CameraPreset,
  ColorOption,
  FocusPart,
  InteriorOption,
  LightModeOption,
  QualityLevel,
  WheelOption,
} from '@/features/car-viewer/types/car'

export interface EngineSnapshot {
  bodyColor: ColorOption
  wheel: WheelOption
  brakeCaliper: ColorOption
  exteriorKitIds: string[]
  interior: InteriorOption
  lightMode: LightModeOption
  cameraPreset: CameraPreset
  qualityLevel: QualityLevel
  doorsOpen: boolean
}

interface CarParts {
  root: Group
  body: Mesh[]
  wheels: Mesh[]
  calipers: Mesh[]
  carbon: Mesh[]
  lights: Mesh[]
  interior: Mesh[]
  leftDoor: Group
  rightDoor: Group
}

type HotspotHandler = (part: FocusPart) => void

/**
 * 3D 跑车展示引擎 by AI.Coding
 * 封装 Three.js 场景、程序化跑车、材质切换、镜头动画和拾取交互。
 */
export class CarViewerEngine {
  private readonly container: HTMLElement
  private readonly onHotspot: HotspotHandler
  private readonly scene = new Scene()
  private readonly camera = new PerspectiveCamera(38, 1, 0.1, 100)
  private readonly renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: true })
  private readonly raycaster = new Raycaster()
  private readonly pointer = new Vector2()
  private readonly controls: OrbitControls
  private readonly clockTarget = new Vector3(0, 0.65, 0)
  private carParts: CarParts
  private animationFrame = 0
  private isDisposed = false
  private isVisible = true
  private lastSnapshot: EngineSnapshot | null = null

  constructor(container: HTMLElement, onHotspot: HotspotHandler) {
    this.container = container
    this.onHotspot = onHotspot
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.carParts = this.createProceduralCar()

    this.configureRenderer()
    this.configureScene()
    this.configureControls()
    this.container.appendChild(this.renderer.domElement)
    this.scene.add(this.carParts.root)
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
    this.applyPaint(snapshot.bodyColor)
    this.applyWheels(snapshot.wheel)
    this.applyBrakeCalipers(snapshot.brakeCaliper)
    this.applyCarbonKits(snapshot.exteriorKitIds)
    this.applyInterior(snapshot.interior)
    this.applyLights(snapshot.lightMode)
    this.applyQuality(snapshot.qualityLevel)
    this.animateDoors(snapshot.doorsOpen)
    this.moveCamera(snapshot.cameraPreset)
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
    this.carParts.root.traverse((object) => {
      if (object instanceof Mesh) {
        object.geometry.dispose()
        const materials = Array.isArray(object.material) ? object.material : [object.material]
        materials.forEach((material) => material.dispose())
      }
    })
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }

  /**
   * 配置渲染器 by AI.Coding
   * 设置色彩管理、阴影和像素比上限，符合汽车摄影棚质感需求。
   */
  private configureRenderer() {
    this.renderer.outputColorSpace = SRGBColorSpace
    this.renderer.toneMapping = ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.12
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
    this.scene.background = new Color('#08090c')
    this.camera.position.set(5.2, 2.25, 5.8)
    this.camera.lookAt(this.clockTarget)

    const ambient = new AmbientLight('#cedcf8', 1.55)
    const key = new DirectionalLight('#ffffff', 3.2)
    key.position.set(-4, 7, 5)
    key.castShadow = true
    key.shadow.mapSize.set(2048, 2048)

    const rim = new DirectionalLight('#7fd8ff', 1.35)
    rim.position.set(4, 2.8, -5)

    const floor = new Mesh(
      new PlaneGeometry(18, 14),
      new MeshPhysicalMaterial({ color: '#111217', roughness: 0.55, metalness: 0.12 }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.42
    floor.receiveShadow = true

    this.scene.add(ambient, key, rim, floor)
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
    return { root, body, wheels, calipers, carbon, lights, interior, leftDoor, rightDoor }
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
    const material = this.createPaintMaterial(color.hex, color.finish)
    this.carParts.body.forEach((part) => {
      part.material = material
    })
  }

  /**
   * 应用轮毂 by AI.Coding
   * 更新轮毂颜色并根据配置影响旋转速度暗示不同样式。
   */
  private applyWheels(wheel: WheelOption) {
    const material = new MeshPhysicalMaterial({ color: wheel.color, metalness: 0.82, roughness: 0.2, clearcoat: 0.45 })
    this.carParts.wheels.forEach((part) => {
      if (part.name.startsWith('wheel')) part.material = material
      part.userData.spinFactor = wheel.spokeCount / 10
    })
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
      const material = part.material as MeshPhysicalMaterial
      material.emissiveIntensity = lightMode.intensity
      material.opacity = lightMode.intensity === 0 ? 0.5 : 1
      material.transparent = lightMode.intensity === 0
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
   * 动画车门 by AI.Coding
   * 使用 GSAP 平滑打开或关闭左右车门。
   */
  private animateDoors(open: boolean) {
    gsap.to(this.carParts.leftDoor.rotation, { z: open ? 0.82 : 0, y: open ? -0.18 : 0, duration: 0.75, ease: 'power3.out' })
    gsap.to(this.carParts.rightDoor.rotation, { z: open ? -0.82 : 0, y: open ? 0.18 : 0, duration: 0.75, ease: 'power3.out' })
  }

  /**
   * 移动镜头 by AI.Coding
   * 按预设给出外观、前脸、侧面、尾部、内饰和轮毂视角。
   */
  private moveCamera(preset: CameraPreset) {
    const positions: Record<CameraPreset, [number, number, number, number]> = {
      exterior: [5.2, 2.25, 5.8, 0.65],
      front: [5.6, 1.45, 0.35, 0.55],
      side: [0.2, 1.25, 6.6, 0.45],
      rear: [-5.5, 1.55, -0.3, 0.55],
      interior: [0.45, 1.35, 1.25, 0.92],
      wheel: [1.8, 0.45, 2.15, 0.1],
    }
    const [x, y, z, targetY] = positions[preset]
    gsap.to(this.camera.position, { x, y, z, duration: 0.85, ease: 'power3.inOut', onUpdate: () => this.camera.lookAt(this.controls.target) })
    gsap.to(this.controls.target, { x: preset === 'wheel' ? 1.35 : 0, y: targetY, z: preset === 'wheel' ? 0.92 : 0, duration: 0.85, ease: 'power3.inOut' })
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
    this.carParts.wheels.forEach((wheel) => {
      wheel.rotation.x += 0.006 * (wheel.userData.spinFactor ?? 1)
    })
    this.carParts.root.rotation.y += 0.0008
    this.renderer.render(this.scene, this.camera)
  }
}
