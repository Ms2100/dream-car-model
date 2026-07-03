# 3D 跑车展示官网技术设计

## 1. 项目定位

建设一个高真实感 3D 跑车展示官网，用户进入页面后可以在多款市面跑车之间切换，查看真实材质、纹理、灯光、内饰与配件细节，并支持车身颜色、轮毂、碳纤维套件、刹车卡钳、内饰主题等可视化配置。

目标体验参考豪华汽车官网、概念车发布页和高端 3D 产品配置器。页面应优先展示真实车辆本体，而不是营销式静态落地页。

## 2. 核心结论

Vue 3 + Vite 适合本项目。推荐技术栈如下：

- 前端框架：Vue 3 + Vite + TypeScript
- 3D 渲染：Three.js
- Vue 3D 集成：TresJS，可选；复杂配置器也可以使用原生 Three.js 封装渲染模块
- 动画：GSAP + ScrollTrigger
- 状态管理：Pinia
- UI 组件：Naive UI / Radix Vue / 自定义轻量组件
- 模型格式：glTF / GLB
- 贴图格式：KTX2 / WebP / AVIF
- 后期处理：three/examples EffectComposer
- 模型压缩：Draco + Meshopt
- 纹理压缩：Basis Universal / KTX2

如果团队以 Vue 为主，Vue 3 + Vite 是合适选择。如果团队追求 3D 生态成熟度和现成案例数量，React + Vite + React Three Fiber + Drei 会更有优势。但本项目完全可以用 Vue 3 + Vite 做到高质量交付。

推荐落地方案：Vue 3 负责页面、状态、配置面板和路由；Three.js 负责 3D 场景、材质、灯光、模型加载和交互。不要把复杂 Three.js 逻辑直接写在 Vue 组件里，应独立封装为 `CarViewerEngine`。

## 3. 真实效果边界

“完全真实”的视觉效果不能只靠代码实现，必须依赖高质量资产与渲染流程。设计目标定义为“接近真实汽车配置器的高保真 3D 效果”。

必要条件：

- 使用合法授权的高精度车辆模型，不使用粗糙低面数免费模型作为正式资产
- 每款车提供独立 PBR 材质贴图，包括 baseColor、metallic、roughness、normal、ao、clearcoat、clearcoatRoughness 等
- 使用 HDRI 环境贴图提供真实反射
- 车漆使用 MeshPhysicalMaterial，开启 clearcoat、metalness、roughness、envMapIntensity
- 玻璃、车灯、轮胎、刹车盘、碳纤维、内饰皮革分别使用独立材质
- 桌面端启用高质量阴影和后期处理，移动端按设备性能自动降级

品牌注意事项：

- 宝马 M3、兰博基尼、法拉利等均涉及商标、外观设计、模型版权和素材授权
- 开发阶段可使用占位车型或已授权模型
- 正式上线必须确认模型、Logo、车名、图片、纹理、音效和品牌素材的商业授权

## 4. 车型范围

首期建议支持 6 款车型，便于控制资产体积与性能：

- BMW M3 Competition
- Lamborghini Huracan / Revuelto
- Ferrari 296 GTB / SF90 Stradale
- Porsche 911 Turbo S
- McLaren 720S / Artura
- Mercedes-AMG GT

车型数据采用配置化方式维护，每款车拥有独立模型、材质映射、配件选项、颜色选项和性能参数展示。

## 5. 页面结构

### 5.1 首页即 3D 展示器

首屏直接展示 3D 跑车，不做传统营销落地页。

组成：

- 顶部导航：品牌名、车型、配置、性能、图库
- 中央 3D 视窗：车辆主展示区域
- 左侧车型选择器：多款跑车缩略图和名称
- 右侧配置面板：颜色、轮毂、套件、内饰、灯光
- 底部信息栏：车型名称、马力、百公里加速、极速、价格区间

### 5.2 车型选择

用户可以在车型列表中切换车辆。

交互要求：

- 切换车型时镜头平滑过渡
- 新车型加载时展示骨架占位或低清预览
- 模型资源懒加载，不一次性加载所有车型
- 已加载车型保留缓存，二次切换快速显示

### 5.3 车身配置

支持以下配置项：

- 车身颜色：金属漆、哑光漆、珠光漆、赛车涂装
- 轮毂：不同样式、尺寸、颜色
- 刹车卡钳：红、黄、蓝、黑、银
- 外观套件：碳纤维前唇、侧裙、尾翼、扩散器
- 车灯：日间行车灯、近光灯、尾灯开关
- 内饰：座椅颜色、缝线颜色、碳纤维饰板

### 5.4 3D 交互

基础交互：

- 鼠标拖拽旋转车辆
- 滚轮缩放
- 双击聚焦指定部件
- 移动端单指旋转、双指缩放
- 点击热点查看部件说明

高级交互：

- 开关车门
- 打开引擎盖
- 启动车灯
- 轮毂缓慢旋转预览
- 镜头一键切换：外观、前脸、侧面、尾部、内饰、轮毂
- 滚动页面时触发镜头路径动画

## 6. 技术架构

### 6.1 模块划分

```text
src/
  app/
    router/
    stores/
    styles/
  features/
    car-viewer/
      engine/
        CarViewerEngine.ts
        SceneManager.ts
        CameraManager.ts
        LightManager.ts
        MaterialManager.ts
        ModelManager.ts
        InteractionManager.ts
        PerformanceManager.ts
      components/
        CarViewer.vue
        CarConfigurator.vue
        CarSelector.vue
        PartHotspots.vue
      data/
        cars.ts
        materials.ts
        presets.ts
      types/
        car.ts
  shared/
    components/
    utils/
    assets/
```

### 6.2 职责说明

- `CarViewer.vue`：承载 canvas 容器，处理 Vue 生命周期
- `CarViewerEngine.ts`：Three.js 总入口，统一初始化、销毁和 resize
- `SceneManager.ts`：管理 scene、renderer、environment、postprocessing
- `CameraManager.ts`：管理相机、轨道控制、镜头预设和动画
- `LightManager.ts`：管理 HDRI、补光、阴影灯和灯光预设
- `ModelManager.ts`：加载、缓存、卸载车辆模型
- `MaterialManager.ts`：替换车漆、玻璃、轮胎、内饰等材质
- `InteractionManager.ts`：处理拾取、热点、点击部件和手势
- `PerformanceManager.ts`：根据设备能力自动调整画质
- `Pinia store`：保存当前车型、配置项、加载状态和 UI 状态

## 7. 数据模型

### 7.1 车型配置

```ts
export interface CarModelConfig {
  id: string
  brand: string
  name: string
  displayName: string
  modelUrl: string
  previewImage: string
  hdriPreset: string
  stats: CarStats
  materialSlots: CarMaterialSlots
  options: CarOptions
}
```

### 7.2 材质插槽

```ts
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
```

### 7.3 配置选项

```ts
export interface CarOptions {
  bodyColors: BodyColorOption[]
  wheels: WheelOption[]
  brakeCalipers: ColorOption[]
  exteriorKits: ExteriorKitOption[]
  interiors: InteriorOption[]
  lightModes: LightModeOption[]
}
```

## 8. Three.js 渲染方案

### 8.1 Renderer

- 使用 `WebGLRenderer`
- 开启 antialias，但移动端可关闭
- 使用 `ACESFilmicToneMapping`
- 使用 `SRGBColorSpace`
- 设置合理 `toneMappingExposure`
- 桌面端像素比上限 2
- 移动端像素比上限 1.25 或 1.5

### 8.2 材质

车漆：

- `MeshPhysicalMaterial`
- `metalness: 0.6 - 1.0`
- `roughness: 0.18 - 0.35`
- `clearcoat: 0.8 - 1.0`
- `clearcoatRoughness: 0.03 - 0.12`
- 支持金属漆颗粒纹理

玻璃：

- `MeshPhysicalMaterial`
- `transmission`
- `roughness`
- `ior`
- 适度透明，不要过度发黑

碳纤维：

- 使用 normal map + roughness map
- 根据 UV 方向控制纹理尺度
- 单独设置反射强度

轮胎：

- 使用低反射橡胶材质
- normal map 表现胎纹细节

车灯：

- 使用 emissive 材质
- Bloom 只对车灯和高亮区域增强

### 8.3 灯光

- 主环境光来自 HDRI
- PMREM 生成环境反射
- 使用大型 Area Light 模拟摄影棚柔光
- 使用 Directional Light 产生可控阴影
- 车底增加 contact shadow 或 baked shadow

### 8.4 后期处理

桌面高画质：

- FXAA / SMAA
- Bloom
- SSAO / GTAO
- Vignette，弱化使用
- Depth of Field，仅用于镜头动画，不常驻强开

移动端：

- 默认关闭 SSAO 和景深
- Bloom 降低采样
- 阴影分辨率降低

## 9. 模型资产规范

每款车型建议提供：

```text
car.glb
textures/
  body_basecolor.ktx2
  body_metallic_roughness.ktx2
  body_normal.ktx2
  carbon_basecolor.ktx2
  carbon_normal.ktx2
  tire_basecolor.ktx2
  tire_normal.ktx2
  leather_basecolor.ktx2
  leather_normal.ktx2
preview.webp
metadata.json
```

资产要求：

- 模型格式统一为 GLB
- 单款车桌面高模资源建议控制在 20MB - 60MB
- 移动端提供 LOD 或轻量版本，建议 8MB - 25MB
- 所有纹理使用 KTX2 压缩
- 模型必须命名清晰，方便按部件替换材质
- 关键部件需要独立 mesh：车身、玻璃、轮毂、轮胎、刹车、车灯、内饰、套件
- 开门、灯光、尾翼等交互部件需要保留 pivot 或骨骼动画

## 10. 性能优化方案

### 10.1 加载优化

- 首页只加载默认车型
- 其他车型进入视口或用户悬停时预加载
- 使用 `GLTFLoader`
- 启用 `DRACOLoader`
- 启用 `MeshoptDecoder`
- 启用 `KTX2Loader`
- 使用缓存池复用已加载模型
- 用 Service Worker 缓存稳定资产

### 10.2 渲染优化

- 按设备性能动态设置 pixelRatio
- 移动端关闭高成本后期处理
- 用户停止交互时降低渲染频率
- 不可见页面暂停渲染循环
- 使用 LOD 模型
- 合并静态网格
- 避免过多实时阴影灯
- 限制透明材质数量
- 对热点、UI、标签使用 CSS2DRenderer 或 DOM 叠层，避免全部放进 3D

### 10.3 性能目标

桌面端：

- 首屏可交互时间小于 3 秒，弱网除外
- 默认车型加载完成小于 5 秒，取决于 CDN
- 1080p 下稳定 50 - 60 FPS
- 中高端显卡开启高质量后期处理

移动端：

- 首屏可交互时间小于 4 秒
- 稳定 30 FPS 以上
- 自动降级阴影、后期处理和纹理分辨率

## 11. 交互状态设计

全局状态：

- 当前车型
- 当前颜色
- 当前轮毂
- 当前刹车卡钳
- 当前外观套件
- 当前内饰
- 当前灯光模式
- 当前镜头预设
- 当前画质等级
- 模型加载状态

交互事件：

- `selectCar(carId)`
- `changeBodyColor(colorId)`
- `changeWheel(wheelId)`
- `changeBrakeCaliper(colorId)`
- `toggleExteriorKit(kitId)`
- `changeInterior(interiorId)`
- `setLightMode(modeId)`
- `focusPart(partId)`
- `playDoorAnimation(side)`
- `setQualityLevel(level)`

## 12. UI 设计原则

- 页面主角必须是车辆，控制面板不能遮挡核心车身区域
- PC 端采用左右工具区 + 中央 3D 视窗
- 移动端采用底部抽屉式配置面板
- 颜色选择使用真实色卡，不只显示文字
- 配件选择使用缩略图和名称
- 图标按钮用于镜头、灯光、截图、全屏等操作
- 所有配置变更必须即时反馈
- 加载中显示车型剪影或低清预览，不显示空白 canvas
- 错误时显示降级静态图和重试按钮

## 13. 路由设计

```text
/                       默认 3D 展示器
/cars/:carId            指定车型
/cars/:carId/configure  指定车型配置器
/gallery                图库，可选
```

配置可以通过 URL 查询参数分享：

```text
/cars/ferrari-296/configure?color=rosso-corsa&wheels=forged-black&interior=black-red
```

## 14. 开发任务拆分

### 阶段 1：工程基础

- 创建 Vue 3 + Vite + TypeScript 项目
- 配置 ESLint、Prettier、Stylelint
- 引入 Pinia、Vue Router、Three.js、GSAP
- 建立基础目录结构
- 实现响应式全局布局

### 阶段 2：Three.js 基础展示器

- 实现 `CarViewerEngine`
- 初始化 scene、camera、renderer
- 接入 OrbitControls
- 实现 resize 和销毁逻辑
- 加载默认 GLB 车型
- 接入 HDRI 环境贴图

### 阶段 3：真实材质与灯光

- 建立材质插槽系统
- 实现车漆材质切换
- 实现玻璃、轮胎、碳纤维、皮革、车灯材质
- 添加摄影棚灯光预设
- 接入后期处理
- 调整色彩管理和曝光

### 阶段 4：车型与配置系统

- 定义车型数据结构
- 实现车型选择器
- 实现配置面板
- 实现颜色、轮毂、刹车、内饰、套件切换
- 实现配置状态持久化
- 实现 URL 配置分享

### 阶段 5：高级交互

- 实现部件点击拾取
- 实现热点标签
- 实现镜头预设
- 实现车门、灯光、尾翼等动画
- 实现滚动触发镜头动画
- 实现截图和全屏查看

### 阶段 6：性能优化

- 接入 Draco、Meshopt、KTX2
- 实现模型缓存
- 实现懒加载和预加载
- 实现画质分级
- 实现移动端降级策略
- 实现页面不可见时暂停渲染
- 对模型和纹理做体积审计

### 阶段 7：测试与验收

- 桌面端 Chrome、Edge、Safari 验证
- iOS Safari 和 Android Chrome 验证
- 验证不同 GPU 和低端设备表现
- 验证模型加载失败、弱网、无 WebGL 的降级体验
- 使用 Lighthouse 检查性能
- 使用 Playwright 截图检查主要视口布局

## 15. 验收标准

功能验收：

- 用户可以在至少 6 款跑车之间切换
- 每款车型可以切换车身颜色
- 至少 3 类配件可以切换
- 车灯、车门或热点至少有一种高级交互
- PC 和移动端都能完成核心配置流程
- 配置结果可以通过 URL 复现

视觉验收：

- 车漆具备清晰环境反射和清漆层质感
- 玻璃、轮胎、碳纤维、内饰材质能明显区分
- 车辆接地阴影自然，不悬浮
- 模型细节足够表现车灯、轮毂、刹车、内饰
- 色彩和曝光接近汽车摄影棚效果

性能验收：

- 桌面端默认场景 50 FPS 以上
- 移动端默认场景 30 FPS 以上
- 首屏不出现长时间空白 canvas
- 切换车型时有明确加载反馈
- 低端设备自动降低画质，不直接崩溃

## 16. 主要风险与应对

### 16.1 模型版权风险

风险：知名跑车模型和品牌素材可能没有商业授权。

应对：

- 开发阶段使用占位模型
- 正式上线前采购或制作授权资产
- 保留车型数据配置能力，方便替换资产

### 16.2 资产体积过大

风险：多车型高精度模型导致加载慢。

应对：

- 单车型懒加载
- 使用 Draco、Meshopt、KTX2
- 提供移动端低模版本
- CDN 缓存和预加载

### 16.3 移动端性能不足

风险：真实材质、阴影和后期处理在移动端卡顿。

应对：

- 自动画质分级
- 移动端降低 pixelRatio
- 关闭高成本后期处理
- 使用 baked shadow 替代部分实时阴影

### 16.4 真实感调试成本高

风险：Three.js 参数正确但视觉仍不真实。

应对：

- 建立固定 HDRI 和灯光预设
- 每款车做单独材质校准
- 使用汽车摄影参考图做视觉对照
- 将材质参数配置化，避免写死在代码中

## 17. 推荐实施顺序

1. 先实现单车型高质量展示器
2. 再加入颜色和材质切换
3. 再扩展多车型
4. 再做配件、热点和动画
5. 最后进行资产压缩、性能降级和视觉精调

不要一开始同时接入大量车型。首个车型的真实感、性能和交互架构验证通过后，再批量扩展车型资产。

## 18. 最小可行版本

MVP 建议范围：

- 1 款授权或占位高质量跑车 GLB
- 5 种车身颜色
- 3 套轮毂
- 3 种刹车卡钳颜色
- 2 种内饰
- 3 个镜头预设
- 车灯开关
- PC + 移动端可用
- 基础性能降级

MVP 通过后再扩展宝马 M3、兰博基尼、法拉利等多车型矩阵。

