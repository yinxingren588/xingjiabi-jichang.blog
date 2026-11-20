---
title: "Clash Verge Rev 2026 最新小白上手使用教程（Windows / macOS 全图文）"
description: "全面讲解 2026 年替代原版 Clash for Windows 的开源神器 Clash Verge Rev 安装、中文设置、订阅导入、TUN 模式及系统代理配置全过程。"
pubDate: 2026-03-02
platform: "Windows / macOS"
client: "Clash Verge Rev"
difficulty: "新手入门"
readingTime: "4 分钟"
featured: true
---

## 📌 为什么推荐 Clash Verge Rev？

在 Clash for Windows (CFW) 停止维护后，开源社区基于 Tauri 框架打造的 **Clash Verge Rev** 迅速成为了目前最主流、最美观且内存占用最低的桌面客户端。内置 Mihomo (原 Clash.Meta) 优质内核，支持最新的 VLESS、Reality、Hysteria 2 等现代协议。

---

## 🛠️ 第一步：下载与安装

建议从官方 GitHub Release 或安全镜像源下载对应系统的安装包：

1. **Windows 用户**：下载 `Clash.Verge_x.x.x_x64-setup.exe`，按默认提示下一步安装即可。
2. **macOS 用户**：
   - 搭载 Apple Silicon 芯片（M1/M2/M3/M4）请下载 `_aarch64.dmg`；
   - Intel 芯片老 Mac 请下载 `_x64.dmg`。

---

## 🔗 第二步：导入机场订阅链接

1. 登录您在【性价比机场】推荐列表中挑选的机场官网后台。
2. 在用户中心找到 **「便捷导入 / 一键订阅」**。
3. 点击 **「复制 Clash 订阅链接」** 或直接点击 **「一键导入到 Clash」**。
4. 打开 Clash Verge Rev 客户端，点击左侧菜单栏的 **「订阅 (Profiles)」**。
5. 将复制的 URL 粘贴到顶部输入框中，点击 **「保存 (Save)」** 即可自动下载节点配置。

---

## 🚀 第三步：开启代理与模式选择

1. **选择节点**：切换到左侧 **「代理 (Proxies)」**，在策略组中选择延迟较低的节点（如香港 IEPL、日本专线等）。
2. **选择代理模式**：
   - **规则 (Rule)**【强烈推荐】：国内网站直接连接不走流量，国外网站自动走代理，不影响国内微信与淘宝。
   - **全局 (Global)**：所有流量均走代理节点。
3. **启用系统代理**：在左侧 **「设置 (Settings)」** 中，打开 **「系统代理 (System Proxy)」** 开关，即可畅享高速自由互联网！

> 💡 **进阶提示**：如果发现 Steam 商店、某些游戏平台或特定软件无法联网，可开启左侧设置里的 **「TUN 模式 (虚拟网卡模式)」**，接管整机底层流量。
