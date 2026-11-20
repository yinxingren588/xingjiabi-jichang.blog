# 🚀 性价比机场 (xingjiabi-jichang.blog)

> 2026 最新优质、稳定、便宜高性价比机场推荐与评测博客框架。基于 **Astro 5 + Tailwind CSS v4 + Content Collections** 驱动，极致加载性能，SEO 友好，开箱即用。

---

## 🌟 核心特性

- ⚡ **极致极速性能**：Astro 纯静态生成（SSG），默认 0 客户端 JS 负担，首屏秒开。
- 🏆 **机场综合推荐榜单**：内置高转化卡片展示（价格、流量、IEPL/BGP线路、晚高峰测速、原生 AI/流媒体解锁标牌、专属优惠码一键复制）。
- 📊 **横向参数对比大表格**：直观横向对比价格、带宽与特色功能。
- 📝 **深度跑分测评专栏**：基于 Markdown 内容集合（Content Collections），带评分标签、优缺点 (Pros & Cons) 总结卡片。
- 📖 **客户端新手配置教程**：覆盖 Windows、macOS、iOS、Android 平台（Clash Verge Rev、Sing-box、Shadowrocket 小火箭）。
- 🔗 **Affiliate 安全中转页 (`/go/:slug`)**：专属倒计时自动跳转与优惠码二次提醒，防外部直链封锁拦截。
- 🔍 **SEO 与安全规范**：自动生成 `sitemap-index.xml` 与 `robots.txt`，防爬虫收录推广跳转，内置 OpenGraph 与 Schema.org 结构化数据。

---

## 📂 项目目录结构

```text
├── public/
│   ├── favicon.svg             # 网站 Logo 图标
│   └── robots.txt              # SEO 爬虫策略（放行全站，屏蔽 /go/ 外链）
├── src/
│   ├── components/             # UI 模块组件
│   │   ├── AirportCard.astro   # 单个机场推荐卡片
│   │   ├── ComparisonTable.astro # 横向对比排行榜大表格
│   │   ├── CopyButton.astro    # 优惠码一键复制小组件
│   │   ├── FaqAccordion.astro  # 常见问题 FAQ 展开栏
│   │   ├── Navbar.astro        # 顶部导航（自适应移动端菜单）
│   │   └── Footer.astro        # 页脚（免责声明、友链、版权）
│   ├── content/                # 博客文章内容库 (Markdown)
│   │   ├── reviews/            # 机场测评文章 (.md)
│   │   └── guides/             # 客户端教程文章 (.md)
│   ├── content.config.ts       # Astro 内容集合 Schema 定义
│   ├── data/
│   │   └── airports.ts         # 核心机场结构化数据库（价格/优惠码/推广链接）
│   ├── layouts/
│   │   ├── BaseLayout.astro    # 全局基础 SEO 骨架
│   │   └── PostLayout.astro    # 测评与教程详情页排版
│   ├── pages/                  # 页面路由
│   │   ├── index.astro         # 博客首页
│   │   ├── airports.astro      # 完整推荐排行榜单页
│   │   ├── reviews/            # 测评专栏列表与详情页
│   │   ├── guides/             # 教程专栏列表与详情页
│   │   ├── go/[slug].astro     # Affiliate 链接安全跳转中转站
│   │   ├── disclaimer.astro    # 免责声明与使用条款
│   │   └── 404.astro           # 404 页面
│   └── styles/
│       └── global.css          # Tailwind CSS v4 样式定义
└── astro.config.mjs            # Astro 配置文件
```

---

## 🛠️ 本地运行与管理

因 Windows PowerShell 默认脚本执行策略限制，推荐在终端直接使用 `cmd /c` 或使用 `npx`：

### 1. 启动本地开发预览
```bash
cmd /c "pnpm dev"
# 或
cmd /c "npm run dev"
```
浏览器打开 `http://localhost:4321` 即可实时预览修改。

### 2. 打包构建生产文件
```bash
cmd /c "pnpm build"
# 打包生成的纯静态 HTML 文件将保存在 /dist 目录
```

---

## ✍️ 日常如何更新内容？

### 1. 添加或修改推荐机场
编辑 [src/data/airports.ts](file:///c:/Users/user/Desktop/新团%20博客/xingjiabi-jichang.blog/src/data/airports.ts)：
只需在 `AIRPORTS` 数组中添加或修改对应机场字段即可，首页卡片、横向对比表格、推广中转页将**自动同步更新**！

```typescript
{
  id: "your-airport-id",
  name: "机场名称",
  tagline: "一句话亮点介绍",
  badge: "🏆 2026推荐",
  badgeColor: "blue",
  price: "¥15.00",
  priceNote: "/月起",
  traffic: "150GB",
  lineType: "IEPL专线",
  protocols: ["Shadowsocks", "VLESS"],
  unlocks: ["ChatGPT", "Netflix 4K"],
  features: ["亮点1", "亮点2"],
  rating: 4.9,
  reviewCount: 200,
  discountCode: "DISCOUNT10",
  discountNote: "9折优惠",
  affUrl: "https://你的推广链接",
  reviewSlug: "your-airport-id", // 对应 reviews/ 下的 md 文件名
  speedPeak: "600 Mbps+",
  isRecommended: true
}
```

### 2. 发布新的机场测评
在 [src/content/reviews/](file:///c:/Users/user/Desktop/新团%20博客/xingjiabi-jichang.blog/src/content/reviews) 目录下新建 `.md` 文件（如 `my-airport.md`）：

```markdown
---
title: "某某机场深度实测：晚高峰测速跑分与流媒体解锁"
description: "简要介绍文章核心结论"
airportId: "your-airport-id"
pubDate: 2026-03-15
rating: 4.8
pros:
  - "全专线低延迟"
  - "客服响应快"
cons:
  - "月付起步流量较小"
---

## 正文内容...
```

### 3. 发布新的客户端使用教程
在 [src/content/guides/](file:///c:/Users/user/Desktop/新团%20博客/xingjiabi-jichang.blog/src/content/guides) 目录下新建 `.md` 文件即可。

---

## 🚀 免费部署上线建议

1. **Cloudflare Pages（极力推荐）**：
   - 将代码推送到 GitHub。
   - 在 Cloudflare Dashboard 中创建 Pages 项目并绑定仓库。
   - 构建命令填写：`pnpm build`，输出目录填写：`dist`。
   - 自带全球 CDN 加速，国内访问速度极佳，且完全免费，支持绑定自定义域名。
2. **Vercel**：
   - 同样支持一键导入 GitHub 仓库，自动识别 Astro 并构建。
