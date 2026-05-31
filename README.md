# 锋驰无人机电池 - 企业官网

一个富有科幻感的现代化企业官网，展示行业无人机电池解决方案。

## 🚀 特性

- **科幻设计美学** - 霓虹色彩、网格背景、动画效果
- **响应式布局** - 完美适配桌面、平板和手机
- **流畅动画** - 采用Framer Motion实现专业级动画效果
- **现代技术栈** - React 18 + TypeScript + Tailwind CSS
- **高性能** - 使用Vite构建，快速热更新

## 📋 项目结构

```
src/
├── components/          # React组件
│   ├── Header.tsx      # 导航栏
│   ├── Hero.tsx        # 首屏
│   ├── Features.tsx    # 核心竞争力
│   ├── Stats.tsx       # 数据统计
│   ├── Products.tsx    # 产品体系
│   ├── Cooperation.tsx # 深度合作
│   ├── CallToAction.tsx # 行动呼吁
│   ├── Footer.tsx      # 页脚
│   └── Partners.tsx    # 合作伙伴
├── styles/             # 全局样式
│   └── index.css       # 自定义CSS及Tailwind配置
├── App.tsx             # 主应用组件
└── main.tsx            # 应用入口

public/                # 静态资源
```

## 🛠️ 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📦 主要依赖

- **React** - UI框架
- **TypeScript** - 类型安全的JavaScript
- **Tailwind CSS** - 实用优先的CSS框架
- **Framer Motion** - 专业级动画库
- **Vite** - 快速的现代构建工具

## 🎨 设计元素

### 色彩方案

- **Cyber Blue** (#00D9FF) - 主色调，科幻感
- **Cyber Purple** (#9D4EDD) - 辅助色，高级感
- **Neon Green** (#39FF14) - 强调色，视觉冲击
- **Cyber Dark** (#0A0E27) - 深色背景

### 动画效果

- 渐进显示（Fade In）
- 浮动效果（Float）
- 发光效果（Glow）
- 光标追踪（Cursor Tracking）
- Glitch效果（故障艺术）

## 📱 响应式设计

网站采用移动优先的设计策略，完美支持：
- 📱 手机（320px+）
- 📱 平板（768px+）
- 💻 桌面（1024px+）
- 🖥️ 大屏幕（1280px+）

## 🔧 配置

### Tailwind CSS配置

自定义主题配置在 `tailwind.config.js` 中：
- 扩展颜色变量
- 自定义阴影效果
- 添加关键帧动画

### Vite配置

开发服务器配置在 `vite.config.ts` 中：
- 端口: 3000
- 自动打开浏览器
- 快速热模块替换（HMR）

## 📝 内容更新

### 修改联系信息

编辑 `src/components/CallToAction.tsx` 中的联系方式。

### 修改产品信息

编辑 `src/components/Products.tsx` 中的产品列表。

### 修改合作伙伴

编辑 `src/components/Cooperation.tsx` 中的合作信息。

## 🚀 部署

### Vercel（推荐）

```bash
npm install -g vercel
vercel
```

### Netlify

1. 推送代码到 GitHub
2. 连接到 Netlify
3. 设置构建命令：`npm run build`
4. 设置发布目录：`dist`

### 其他服务器

```bash
npm run build
# 将 dist 文件夹部署到服务器
```

## 🤝 贡献

欢迎提交问题和改进建议！

## 📄 许可证

MIT License - 详见 LICENSE 文件

## ✨ 感谢

感谢所有使用和支持本项目的用户！

---

**FENGCHI UAV BATTERY** - 行业无人机电池领先供应商
