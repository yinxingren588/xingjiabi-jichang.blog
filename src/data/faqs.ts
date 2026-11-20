// 32篇企业级专业深度网络加速与节点选型 FAQ 知识库
export interface FaqItem {
  id: string;
  category: 'topology' | 'benchmark' | 'ai' | 'streaming' | 'protocols' | 'clients' | 'pricing' | 'gaming';
  categoryLabel: string;
  categoryIcon: string;
  question: string;
  shortSummary: string;
  fullAnswer: string;
  tags: string[];
  featuredOnHome?: boolean;
}

export interface FaqCategory {
  key: string;
  label: string;
  icon: string;
  count: number;
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    "key": "all",
    "label": "全部核心问答",
    "icon": "📚",
    "count": 32
  },
  {
    "key": "topology",
    "label": "物理专线拓扑",
    "icon": "🌐",
    "count": 4
  },
  {
    "key": "benchmark",
    "label": "晚高峰测速防坑",
    "icon": "⚡",
    "count": 4
  },
  {
    "key": "ai",
    "label": "高风控 AI 生产力",
    "icon": "🤖",
    "count": 4
  },
  {
    "key": "streaming",
    "label": "流媒体与出海",
    "icon": "🎬",
    "count": 4
  },
  {
    "key": "protocols",
    "label": "现代协议与安全",
    "icon": "🛡️",
    "count": 4
  },
  {
    "key": "clients",
    "label": "客户端选型调优",
    "icon": "💻",
    "count": 4
  },
  {
    "key": "pricing",
    "label": "资费防割与备用",
    "icon": "💰",
    "count": 4
  },
  {
    "key": "gaming",
    "label": "外服电竞与全屋",
    "icon": "🎮",
    "count": 4
  }
];

export const ALL_FAQS: FaqItem[] = [
  {
    "id": "iepl-vs-iplc",
    "category": "topology",
    "categoryLabel": "物理链路与拓扑",
    "categoryIcon": "🌐",
    "question": "IEPL、IPLC、BGP 隧道中继与公网直连，在底层物理架构和抗封锁上有何本质区别？",
    "shortSummary": "IEPL/IPLC 属于不过公网国际网关（GFW）的物理端到端内网光纤；BGP 隧道中继在国内公网入口与境外出口间建立加密隧道；而普通直连完全暴露在公网环境下。",
    "tags": [
      "IEPL专线",
      "IPLC专线",
      "BGP隧道",
      "抗封锁",
      "网络拓扑"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 底层物理链路架构全景对比\n\n| 链路类型 | 物理传输通道 | 经过 GFW 审查 | 晚高峰丢包率 | 抗封锁/抗敏感期能力 | 适用场景与成本 |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **IEPL (国际以太网专线)** | 点对点二层内网跳纤 | **完全不经过** | **< 0.1% (接近0)** | ⭐⭐⭐⭐⭐ (全网顶级) | 高端商业、极低延迟影音与高风控 AI，造价最高 |\n| **IPLC (国际私有租用线路)** | 物理端到端内网光缆 | **完全不经过** | **< 0.2%** | ⭐⭐⭐⭐⭐ (同属顶级) | 跨国金融交易与跨国企业通信，稳定性极佳 |\n| **BGP 隧道中继 (公网内转)** | 国内 BGP 入口 + 加密隧道 | 出境走公网隧道 | 1% - 5% (有轻微波动) | ⭐⭐⭐⭐ (日常稳健) | 主流中端机场标配，兼顾大带宽与性价比 |\n| **普通公网直连 (Direct)** | 普通公网路由 | **100% 暴露在公网** | 10% - 30%+ (高峰雪崩) | ⭐ (极易封锁被墙) | 低价廉价玩具机场，敏感期全线瘫痪 |\n\n### 2. 为什么 IEPL 物理专线是防封锁与防断流的终极方案？\n\n普通公网直连及低端中继，其出境流量必须穿透国际出入口网关。防火墙系统通过**深度包检测 (DPI)**、**主动探测握手特征**以及**流量熵值分析**，一旦判定流量具备代理通信特征，便会对服务器 IP 实施黑洞路由或端口阻断。\n\n而 **IEPL (International Ethernet Private Line)** 则是服务商直接向电信、联通或国际运营商租赁的**跨国内网光纤通道**。用户流量在境内边界机房（如深圳、上海）直接打包装载入内网专线光纤，在物理层面上根本不与公网出入口交换设备相接触，直接在境外机房（香港、东京）解包送达目标网络。因此，无论公网环境如何剧烈波动，IEPL 物理专线均能维持 0 丢包和毫秒级低延迟。"
  },
  {
    "id": "bgp-anycast-tier1",
    "category": "topology",
    "categoryLabel": "物理链路与拓扑",
    "categoryIcon": "🌐",
    "question": "什么是专线“入口 BGP”与“出口 Tier-1”？为什么入口的地理位置和多线支持极其重要？",
    "shortSummary": "BGP 入口确保国内电信、联通、移动用户均能通过本地最优运营商路由直连内网；出口 Tier-1 运营商则决定了节点访问全球目标网站时的最高吞吐与纯净度。",
    "tags": [
      "BGP入口",
      "Tier-1出口",
      "Anycast",
      "路由调度",
      "网络延迟"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. BGP (Border Gateway Protocol) 多线入口的价值\n\n中国内地的互联网生态由中国电信 (China Telecom)、中国联通 (China Unicom)、中国移动 (China Mobile) 三大基础运营商割据主导。跨运营商互联（如移动宽带用户访问电信机房服务器）通常需要经过国家级骨干直连点，容易产生 20-50ms 的额外跨网延迟与拥堵。\n\n高水准专线服务商（如榜单中的**隐形人**、**暮光加速**）在境内前置部署了拥有 **BGP 多线广播能力**的边界路由器：\n- **电信用户**：自动分配接入中国电信 163 / CN2 骨干网络网关；\n- **联通用户**：自动引导进入中国联通 169 / 9929 优质内网网关；\n- **移动用户**：就近接入中国移动骨干 CMNET 节点。\n\n配合 **Anycast (任播技术)**，华南用户自动走深圳入口，华东用户走上海入口，华北用户走北京/青岛入口，确保内网第一跳物理距离最短。\n\n### 2. 出口 Tier-1 (一级跨国运营商) 的核心作用\n\n出口端直接决定了数据离开专线内网后，访问海外互联网（如 Cloudflare CDN、OpenAI 机房、Netflix 服务器）的通畅程度。顶尖专线会在境外接入 Lumen (CenturyLink)、Telia (Arelion)、Tata Communications、NTT 及 PCCW 等全球 Tier-1 骨干网络，拥有无损直连路由，避免二三级转售机房常见的丢包与路由绕路现象。"
  },
  {
    "id": "block-resistance-anti-disconnect",
    "category": "topology",
    "categoryLabel": "物理链路与拓扑",
    "categoryIcon": "🌐",
    "question": "为什么有些廉价机场在敏感时期（重大会议/特殊节点）会大面积“全红断流”？专线如何做到防失联？",
    "shortSummary": "廉价机场多采用廉价公网直连或公网端口转发，敏感期公网阻断策略升级导致入口与出口全部被封；而正规企业专线依托内网封装协议，完全豁免于公网审查风暴。",
    "tags": [
      "防封锁",
      "敏感期",
      "断流排查",
      "高可用",
      "稳定性"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 廉价机场在敏感期“全军覆没”的机理解密\n\n每逢重要会议或国际敏感时段，国际互联网出口网关的流量审查规则会切换为“高敏防卫模式”：\n1. **DPI 特征加权**：对长连接、高吞吐 TLS 流量进行主动嗅探，甚至进行假证书探测；\n2. **阻断未备案 SNI**：对未在国际白名单的境外机房 IP 实施段式阻断（Drop 或 TCP RST）；\n3. **QoS 强制降权**：公网 UDP 流量被大幅丢弃，导致基于 QUIC 的协议大面积断连。\n\n使用低价 VPS 搭建的直连机场和廉价中继，其境内机房往往无资质，一旦公网 IP 或特定端口被批量封锁，就会在客户端呈现“全红、全部超时（Timeout）”。\n\n### 2. 纯 IEPL 专线的防失联“免死金牌”\n\n- **物理层隔离**：IEPL 专线走的是中国电信/联通等持牌运营商的跨境物理光缆通信，属于商业专用通道；\n- **内网 GRE / VXLAN 隧道打通**：境内接入机房与境外落地机房之间通过点对点专有协议握手，不经过公网网关过滤；\n- **多入口 Anycast 动态漂移**：即便某个境内接入城市的边界路由器因本地公网波动出现小故障，BGP Anycast 会在毫秒内将流量无感漂移到其他正常机房，从而彻底杜绝“断联失联”。"
  },
  {
    "id": "ha-dual-line-backup",
    "category": "topology",
    "categoryLabel": "物理链路与拓扑",
    "categoryIcon": "🌐",
    "question": "单线接入 vs 双线主备热切换：企业级高可用专线容灾系统是如何设计的？",
    "shortSummary": "高可用专线架构采用“深港 + 沪日”跨区域双物理主备，当某一跨海光缆发生意外割接或地震断缆时，流量在 50ms 内自动无感切换至另一物理链路。",
    "tags": [
      "双线热备",
      "容灾系统",
      "海缆断裂",
      "高可用架构"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 为什么“单线专线”存在不可抗力风险？\n\n跨国网络并非牢不可破，海底地震、渔船拖网损毁光缆、沿海机房突发供电事故均可能导致单条物理光缆彻底中断（例如历史上有名的台湾海峡地震与南海海缆割接事故）。如果服务商仅采购了单一一条深港专线，一旦发生物理断缆，用户将面临数小时甚至数天的完全断网。\n\n### 2. 双线跨地域热备 (Active-Standby) 的工程实现\n\n成熟的一线专线服务商（如隐形人、大佬云）采用真正的多地域分布式拓扑：\n- **第一物理主通道（深港 IEPL）**：服务华南及全国主要低延迟需求，往返延迟 30~34ms；\n- **第二物理热备通道（沪日/京韩 IEPL）**：服务华东、华北及亚太跨海备用，往返延迟 40~48ms；\n- **BGP 动态 BFD 心跳监测**：边界路由器以毫秒级频率向对端发送健康探测心跳。当检测到深港链路丢包率超过设定安全阈值（如 5%），主控调度系统自动通过 BGP 路由重告（Route Re-announcement）将流量引导至沪日专线，整个切换过程对终端用户完全透明无感。"
  },
  {
    "id": "peak-hours-congestion-root-cause",
    "category": "benchmark",
    "categoryLabel": "晚高峰测速与防坑",
    "categoryIcon": "⚡",
    "question": "为什么白天测速 800Mbps 飞快，一到晚上 20:30-22:30 就卡顿甚至断流？核心瓶颈在哪里？",
    "shortSummary": "晚高峰是全社会用网流量峰值期。导致卡顿的核心原因不是本地宽带问题，而是服务商的专线超售比过高，或者其公网出口遭到了骨干网运营商的强制 QoS 限速降级。",
    "tags": [
      "晚高峰",
      "测速虚标",
      "QoS限速",
      "超售比",
      "网络拥堵"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 剖析“白天龙、晚上虫”的底层三大致因\n\n1. **骨干网国际公网出口 QoS 压制**：  \n   中国电信 163 骨干网在晚高峰时段，国际出口带宽利用率常年超过 95%。普通公网流量会被运营商的路由器标记为低优先级（Best Effort），丢包率飙升至 20%~40%，TCP 拥塞算法强制将传输速率调至极低水平。\n2. **机场服务商的超售比 (Overselling Ratio) 失控**：  \n   1Gbps 的物理专线带宽成本极为高昂（每月需数万元人民币）。良心机场会将超售比控制在合理范围（如 1:5 至 1:10）；而无良廉价机场为了走量，往往超售 1:50 甚至 1:100。白天大部分用户在上班，网络空闲；晚高峰所有用户同时在线刷 4K 视频，瞬时并发带宽直接打满溢出，导致每个人都只能分到几百 Kbps 的龟速。\n3. **单节点高并发连接数撞墙**：  \n   部分廉价节点所使用的 VPS 服务器 CPU 性能与网络软中断处理能力低下，并发连接数超过几千时系统直接僵死，出现假死断流。\n\n### 2. 选型建议与避坑金律\n\n在挑选机场时，**切勿被白天的测速图所蒙蔽**。我们实验室的所有基准测试均严格锁定在 **20:30 - 22:30 黄金高峰期** 进行连续 10 轮压力测试，只有晚高峰依然能维持 400Mbps+ 吞吐且丢包率低于 0.1% 的服务商，才具备作为日常主力加速梯子的资格。"
  },
  {
    "id": "fake-line-fake-residential-fraud",
    "category": "benchmark",
    "categoryLabel": "晚高峰测速与防坑",
    "categoryIcon": "⚡",
    "question": "揭秘机场“测速跑单”与“节点虚标”套路：如何识别假专线与假原生住宅 IP？",
    "shortSummary": "无良商家常用便宜公网中继伪装 IEPL 专线，用广播 IDC 机房 IP 伪装原生住宅 IP。可通过 Traceroute 跳数核查、BGP Looking Glass 与 IPinfo/Scamalytics 纯净度检测进行鉴别。",
    "tags": [
      "防坑指南",
      "假专线",
      "原生IP识别",
      "Fraud Score",
      "Traceroute"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 假专线的常见套路与识别技巧\n\n**套路手段**：商家在节点名称上堂而皇之写着【香港 01 [IEPL专线]】，但后台实际上买的是廉价的香港直连 VPS，或是利用普通的公网国内中继转发。\n\n**硬核鉴别法**：\n1. **多路由跳数分析 (Traceroute / MTR)**：  \n   真 IEPL 物理专线在境内入口（如深圳）直接通过内网光纤跳到境外落地（如香港），中间除了内网网关外，**绝对不会出现公网国际出口跳数（例如 202.97.*.* 电信公网路由）**，全国沿海到香港的 RTT 物理下限在 28-35ms 之间且极其平稳。如果测出的延迟忽高忽低且能跟踪到公网骨干跳数，必为假专线。\n2. **Ping 波动与丢包对比**：  \n   持续 Ping 目标节点 500 个数据包。真专线的标准方差 (StdDev) 应该在 1.5ms 以内，丢包率为 0.00%；假专线在晚高峰必定会出现丢包和 10ms 以上的抖动。\n\n### 2. 假原生住宅 IP 的识别与排查\n\n**套路手段**：利用免费修改 DNS 欺诈解锁（DNS 解锁），或者采用海外低端机房广播 IP，在 speedtest 页面虽然显示当地运营商，但在进入 OpenAI 或银行风控系统时立即被拒。\n\n**硬核鉴别法**：\n- 登录权威 ASN 数据库 `https://ipinfo.io` 或 `https://scamalytics.com`；\n- 查看 **Type 属性**：若显示为 `hosting` 或 `datacenter`，属于普通机房 IP；只有显示为 `isp` 甚至 `residential`，且 **Fraud Score (欺诈分) < 15**，才是真正免风控的双 ISP 原生住宅 IP。"
  },
  {
    "id": "rtt-jitter-loss-analysis",
    "category": "benchmark",
    "categoryLabel": "晚高峰测速与防坑",
    "categoryIcon": "⚡",
    "question": "测速中的 RTT (延迟)、Jitter (抖动) 与 Packet Loss (丢包率)，哪个对实际体验影响最大？",
    "shortSummary": "普通网页浏览最怕丢包；实时语音会议与外服电竞最怕高抖动；单纯的延迟高只影响响应初速度，丢包一旦超过 2% 就会引发 TCP 带宽断崖式雪崩。",
    "tags": [
      "RTT延迟",
      "Jitter抖动",
      "丢包率",
      "TCP拥塞",
      "BBR算法"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 三大网络核心物理指标解析\n\n1. **RTT (Round Trip Time, 往返延迟)**：  \n   从客户端发送数据包到接收到服务器应答包所需的物理时间。受光速与物理距离硬性制约（深圳到香港约 30ms，上海到东京约 45ms，中美跨洋约 130-150ms）。只要延迟稳定，130ms 看 4K 视频毫无压力。\n2. **Jitter (网络抖动)**：  \n   各连续数据包到达延迟的离散程度。抖动大于 5ms 会导致实时 VoIP 语音会议（如 Zoom、Google Meet）出现机械电音、卡顿；导致外服电竞游戏（如瓦罗兰特、Apex）出现人物瞬移与判定丢失。\n3. **Packet Loss (丢包率) —— 吞吐量的致命杀手**：  \n   现代互联网基于 TCP 协议传输。根据经典 Mathis 吞吐公式，TCP 连接的最大吞吐量与丢包率的平方根成反比。当丢包率达到 **2%** 时，即便服务器具备 10Gbps 带宽，单线程实际传输速度也会被强制压制在几十 Mbps 以下！\n\n### 2. 不同网络业务对指标的敏感度矩阵\n\n| 业务场景 | 延迟 (RTT) 敏感度 | 抖动 (Jitter) 敏感度 | 丢包率 (Loss) 容忍极限 |\n| :--- | :--- | :--- | :--- |\n| **YouTube / Netflix 4K 播放** | 低 (靠缓冲区平滑) | 低 | 中 (允许 < 1%) |\n| **ChatGPT / Claude AI 对话** | 中 (首字吐出速度) | 中 | **低 (必须 < 0.5%，否则断流重试)** |\n| **Zoom 视频会议 / 远程桌面** | 高 (需 < 80ms) | **极高 (需 < 2ms)** | **极低 (超过 1% 画面撕裂)** |\n| **外服电竞 (Steam/Apex)** | **极高 (需 < 45ms)** | **极高 (必须平稳)** | **0 丢包 (物理专线专享)** |"
  },
  {
    "id": "single-thread-vs-multi-thread",
    "category": "benchmark",
    "categoryLabel": "晚高峰测速与防坑",
    "categoryIcon": "⚡",
    "question": "单线程下载速度 vs 多线程并发吞吐：为什么 Speedtest 测速跑满千兆，但 YouTube 4K 依然转圈？",
    "shortSummary": "Speedtest 默认采用 16-32 条多线程并发测速，能掩盖单连接丢包；而浏览器播放 YouTube 4K/8K 视频主要依赖单线程 TCP 传输，单连接吞吐才是真实实力的试金石。",
    "tags": [
      "单线程测速",
      "多线程测速",
      "YouTube缓冲",
      "TCP窗口",
      "性能测试"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. Speedtest 多线程的“障眼法”\n\n许多用户经常困惑：“为什么我在 Speedtest 上测速能跑满 500Mbps 甚至 1000Mbps，但打开 YouTube 播放 4K 视频却一直转圈缓冲，甚至只能自动降画质到 1080P？”\n\n**核心秘密在于线程数与丢包补偿机制**：\n- **Speedtest 测速模式**：客户端同时建立 16 至 32 条 TCP 连接并发下载数据，把多条流的带宽强行相加。即使单条连接丢包率高、速度慢，几十条并发线程依然能“凑”出极高的测试数字。\n- **真实浏览器流媒体传输**：YouTube、Netflix 播放器与服务器交互时，通常仅建立 1~2 条主力 TCP/QUIC 数据传输流。如果节点链路丢包率高，由于 TCP 拥塞控制机制，单连接吞吐量会被直接压死在 5Mbps-10Mbps，无法及时向播放器缓冲区填充 4K 高码率视频块，从而导致频繁卡顿转圈。\n\n### 2. 评测室专业检测方法\n\n在评估机场真实性能时，必须关注**单线程吞吐能力 (Single-thread Throughput)**。在千兆家庭宽带下，优质 IEPL 专线单线程吞吐应能稳定在 **250Mbps 以上**，此时 YouTube 4K/8K 视频播放的 Buffer Health (缓冲区健康度) 才能长期稳定在 20 秒以上，实现随拖随放无缝播放。"
  },
  {
    "id": "chatgpt-claude-access-denied",
    "category": "ai",
    "categoryLabel": "高风控 AI 生产力",
    "categoryIcon": "🤖",
    "question": "为什么访问 ChatGPT 4o 和 Claude 3.5 Sonnet 频繁遭遇“Access Denied”或“1020 报错”？",
    "shortSummary": "主要源于机房数据中心 IP 被 Cloudflare 与 AI 官方联合标记、多人共享 IP 造成的高频并发异常，以及客户端 WebRTC/DNS 泄露暴露了国内真实网络身份。",
    "tags": [
      "ChatGPT",
      "Claude 3.5",
      "Access Denied",
      "Cloudflare",
      "住宅IP"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. OpenAI 与 Anthropic 风控防御机制深度拆解\n\nOpenAI 与 Anthropic (Claude) 对防爬虫、合规以及滥用防范有着全球最严苛的门禁体系。当您遭遇 `Access Denied`、`Error code 1020` 或死循环的 Cloudflare 验证码时，通常触发了以下三大风控红线：\n\n1. **IDC 机房 ASN 连带封禁**：  \n   普通机场使用的是廉价海外机房服务器（如 AWS、DigitalOcean、Linode、OVH 等）。这些机房 IP 历史上有大量爬虫和垃圾注册行为，在 Cloudflare 的威胁情报数据库中信誉极差，直接被判定为非真人访问。\n2. **万人共享 IP 并发风控**：  \n   数百名甚至上千名机场用户共用同一个出口 IP 向 OpenAI 发起 API 或 Web 会话，短时间内请求频率超出真人极限，系统立即触发自动化安全阻断。\n3. **WebRTC 与 DNS 泄露**：  \n   客户端虽然启用了代理，但浏览器通过 WebRTC 探测直接暴露了本地公网真实内网/外网 IP，或者 DNS 请求依然发送给国内本地运营商，被目标服务器交叉比对判定为欺诈请求。\n\n### 2. 彻底解决 Access Denied 的三大关键步骤\n\n- **选用标配“双 ISP 原生住宅 IP”的专线服务**：如评测第一名的**隐形人**或**灵猫**，其出口 IP 属于当地正规民用宽带 ASN，彻底跳过 IDC 黑名单；\n- **客户端启用 Fake-IP 与严格防 DNS 泄露模式**；\n- **固定分流节点**：严禁在短时间内频繁切换香港、日本、美国等不同地区的节点登录同一个 AI 账号。"
  },
  {
    "id": "dual-isp-residential-ip-explained",
    "category": "ai",
    "categoryLabel": "高风控 AI 生产力",
    "categoryIcon": "🤖",
    "question": "什么是“双 ISP 原生住宅 IP”？它为何是高风控 AI 与跨境出海业务的免风控神器？",
    "shortSummary": "双 ISP 住宅 IP 是指其 ASN 注册信息中，组织类型和使用类型均登记为当地正规民用互联网服务提供商（如 AT&T、Verizon、Comcast），在各类安全网关中被判定为 100% 真实家庭宽带用户。",
    "tags": [
      "双ISP",
      "原生住宅IP",
      "欺诈分",
      "风控解锁",
      "出海必备"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 单 ISP 机房 IP vs 双 ISP 原生住宅 IP\n\n| 属性维度 | 普通机房 IDC 广播 IP | 单 ISP 原生 IP | 双 ISP 原生住宅 IP (顶级纯净) |\n| :--- | :--- | :--- | :--- |\n| **ASN 注册机构** | Hosting / DataCenter (机房) | 部分为 ISP，但母段属于 IDC | **真实民用宽带运营商 (如 AT&T/HKT)** |\n| **Fraud Score (欺诈分)** | 50 ~ 90+ (极高风险) | 20 ~ 40 (中等) | **0 ~ 10 (极低信任安全级)** |\n| **ChatGPT / Claude 体验** | 频繁拒绝访问、反复弹 5 秒盾 | 偶尔需要手机号二验 | **秒开直通，零验证码拦截** |\n| **Netflix / Disney+ 解锁** | 仅支持自制剧或直接封锁 | 大部分区域支持 | **100% 全区无障碍原生库解锁** |\n| **海外银行与电商环境** | 容易触发欺诈封号审查 | 偶尔需要人脸审核 | **等同于当地居民正常家庭网络访问** |\n\n### 2. 为什么双 ISP 原生住宅 IP 如此稀缺昂贵？\n\n真正的原生住宅 IP 资源池无法凭空伪造，服务商必须在当地与民用宽带运营商签署高昂的企业接入合同，或者采购经过严格合规授权的商业民用 IP 资产。对于从事 **AI 深度研发**、**跨国社交媒体运营 (TikTok/Instagram)** 以及 **跨境独立站/外贸收款** 的用户，双 ISP 住宅 IP 是保障资产与账号安全的核心生命线。"
  },
  {
    "id": "ai-session-routing-configuration",
    "category": "ai",
    "categoryLabel": "高风控 AI 生产力",
    "categoryIcon": "🤖",
    "question": "使用 ChatGPT 与 Claude 时的客户端防封分流配置：如何避免 IP 漂移引发账号封控？",
    "shortSummary": "在客户端配置独立的 AI 策略组，指定单一高纯净固定节点，并彻底移除该策略组下的自动轮询 (URL-Test)，确保会话期间 IP 与地理位置绝对固定。",
    "tags": [
      "分流规则",
      "IP漂移",
      "账号防封",
      "Clash配置",
      "Sing-box"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 什么是“IP 频繁漂移”导致封号？\n\n许多新手在使用 Clash 或 Sing-box 时，喜欢把所有流量都丢在 `自动选择 (URL-Test)` 策略组中。当某个节点延迟偶尔增加 5ms 时，客户端会在后台自动跳到另一个节点（例如上一分钟还是香港节点，下一分钟自动漂移到了美国或日本）。\n\n在 OpenAI 和 Anthropic 的后台监控中，同一个登录账号在数分钟内跨越数千公里更换了出口 IP 和地理位置，这种行为在风控系统中会被判定为**“账号被盗”**或**“多人共享非法使用”**，直接触发自动化封号封停。\n\n### 2. 标准配置避坑指南（以 Clash Verge Rev 为例）\n\n1. **建立专用策略组**：在订阅配置中，为 `OpenAI`、`Anthropic`、`Claude` 设立专属规则组，将其与普通网页冲浪区分开；\n2. **固定优质住宅节点**：将 AI 策略组手动指定为评级最高且经过验证的节点（例如【隐形人-日本02[住宅原生]】或【美国01[纯净专线]】），**绝对不要选择自动测速分组**；\n3. **保持长连接 Session 一致性**：如果在对话过程中遇到偶发网络卡顿，切忌疯狂连续切换十几个国家节点。先关闭浏览器页面，等待 1-2 分钟后再重新访问。"
  },
  {
    "id": "developer-academic-proxy-tips",
    "category": "ai",
    "categoryLabel": "高风控 AI 生产力",
    "categoryIcon": "🤖",
    "question": "程序员与科研学术加速：GitHub Copilot、Cursor、Docker 与命令行终端代理终极指南？",
    "shortSummary": "命令行终端与开发工具默认不读取系统代理。可通过开启客户端的 TUN 虚拟网卡模式，或在终端配置文件中显式配置 HTTP_PROXY/ALL_PROXY 环境变量实现底层全量加速。",
    "tags": [
      "开发者加速",
      "GitHub",
      "Cursor",
      "TUN模式",
      "终端代理"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 为什么浏览器能翻墙，但 `git clone` 和 `npm install` 依然超时？\n\n操作系统自带的“系统代理 (System Proxy)”本质上只是一个系统级的环境变量标记，只有遵循该约定的图形化软件（如 Chrome、Edge、Firefox）才会主动通过代理转发数据。而大多数开发者工具、命令行终端（CMD、PowerShell、Git Bash、zsh）以及 Docker 守护进程，在默认情况下直接绕过系统代理向公网发送直连握手，从而遭遇连接超时。\n\n### 2. 解决方案 A：一键开启 TUN 模式（最优雅推荐）\n\n在 **Clash Verge Rev** 或 **Sing-box** 客户端中，开启 **TUN 模式 (虚拟网卡模式)**：\n- 原理：在操作系统内核中创建一个虚拟网络接口，利用路由表将整机底层所有 TCP 和 UDP 流量全部无差别劫持并按分流规则分发；\n- 效果：无需在任何开发软件中单独配置代理端口，无论是 `git clone`、`pip install`、`docker pull`，还是 VSCode / Cursor 里的 **GitHub Copilot 智能补全**，均享受专线极速低延迟。\n\n### 3. 解决方案 B：终端环境变量显式注入\n\n在 PowerShell 配置文件或当前会话中执行：\n```powershell\n$env:HTTP_PROXY=\"http://127.0.0.1:7897\"\n$env:HTTPS_PROXY=\"http://127.0.0.1:7897\"\n$env:ALL_PROXY=\"socks5://127.0.0.1:7897\"\n```\n（注：端口号需根据您的客户端本地监听端口如 7897 / 7890 相应调整）。"
  },
  {
    "id": "netflix-non-original-unlock",
    "category": "streaming",
    "categoryLabel": "流媒体与跨境业务",
    "categoryIcon": "🎬",
    "question": "Netflix 只能看自制剧（无权访问全部内容）是怎么回事？如何实现全区原生解锁？",
    "shortSummary": "Netflix 会对检测到的机房 IDC 广播 IP 实行降级限制，仅展示拥有全球播放版权的 Netflix 自制剧。只有部署了原生住宅 IP 或经过流媒体网关劫持认证的节点，才能解锁当地全部版权剧。",
    "tags": [
      "Netflix",
      "非自制剧",
      "流媒体解锁",
      "Disney+",
      "4K全区"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 什么是 Netflix 的“半解锁”与“全解锁”？\n\n- **半解锁 (仅自制剧)**：  \n  当您搜索热门非 Netflix 自制版权剧（例如《绝命毒师》、《生活大爆炸》或各地区限定动漫电影）时，如果搜索结果为空，只能看到由 Netflix 自身出品的原创剧集（标有大写的红色“N”标志），说明您的节点 IP 被 Netflix 识别为商业代理机房，已被下放至非授权权限池。\n- **全解锁 (全区原生库)**：  \n  如果节点 IP 具有原生住宅属性，在 Netflix 看来您就是身处当地（香港、日本、美国、新加坡）的真实家庭宽带用户，可自由检索并以最高 4K HDR 杜比视界码率观看当地完整版权影视库。\n\n### 2. 如何在客户端配置流媒体分流？\n\n在支持分流规则的客户端中，确保开启 `Streaming` / `Netflix` 专属策略组，并指定标有【原生住宅】或【流媒体优化】的节点。高水准专线还会为流媒体节点部署专有 DNS 劫持与 SNI 代理网关，确保即使主出口 IP 发生变动，流媒体解锁认证依然坚如磐石。"
  },
  {
    "id": "youtube-4k-8k-stats-for-nerds",
    "category": "streaming",
    "categoryLabel": "流媒体与跨境业务",
    "categoryIcon": "🎬",
    "question": "YouTube 4K/8K 60FPS 极速秒开指标详解：如何通过“详细统计信息”判定节点质量？",
    "shortSummary": "右键视频选择“详细统计信息”，核心关注 Connection Speed (需超 120,000 Kbps)、Buffer Health (缓冲区需在 20s 以上) 以及 Dropped Frames (掉帧数必须为 0)。",
    "tags": [
      "YouTube",
      "详细统计信息",
      "4K秒开",
      "8K超清",
      "Buffer Health"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 解读 YouTube“详细统计信息 (Stats for Nerds)”核心参数\n\n在任意 YouTube 视频播放器上点击鼠标右键，勾选 **「详细统计信息 (Stats for Nerds)」**，即可看到当前网络与解码的核心参数面板：\n\n1. **Connection Speed (连接速度)**：  \n   这是客户端与 YouTube 边缘 CDN 服务器之间的真实吞吐带宽（单位为 Kbps）。\n   - 播放 1080P 需保持在 15,000 Kbps 以上；\n   - 播放 4K 60FPS 需保持在 **80,000 - 150,000 Kbps**；\n   - 播放 8K 超高清则需要突破 **250,000 Kbps+**。\n2. **Buffer Health (缓冲区健康度)**：  \n   表示已预下载到本地内存中的视频时长（秒）。健康的高性能专线，Buffer Health 会在点击播放后的 3-5 秒内迅速攀升至 **20s - 40s** 并稳定维持；如果该数值长期徘徊在 3s 以下或频繁触底，就会出现画面停滞转圈。\n3. **Mystery Text / Viewport / Dropped Frames**：  \n   `Dropped Frames` 记录丢帧数。优质专线在此项数值应始终为 `0 / 总帧数`，画面如丝般顺滑。"
  },
  {
    "id": "tiktok-zero-view-environment",
    "category": "streaming",
    "categoryLabel": "流媒体与跨境业务",
    "categoryIcon": "🎬",
    "question": "TikTok 跨境矩阵运营如何破除“0 播放”限流？原生住宅 ASN、DNS 纯净度与软硬件伪装规范？",
    "shortSummary": "TikTok 具有极强的多维反作弊算法。除了拔出国内 SIM 卡、伪装系统时区与语言外，出口节点的 ASN 必须匹配目标国家原生住宅属性，且 WebRTC 与 DNS 不能出现境内泄漏。",
    "tags": [
      "TikTok出海",
      "0播放限流",
      "环境伪装",
      "原生住宅ASN",
      "跨境电商"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 导致 TikTok“0 播放”的底层风控排查表\n\n许多出海创作者辛辛苦苦剪辑的视频上传后播放量始终为 0，原因往往并非内容质量，而是设备与网络环境被字节跳动风控算法打上了“非目标地区虚假流量”标签：\n\n1. **节点 ASN 类别暴露**：  \n   使用普通机房 IP 登录，TikTok 识别到该请求来自 IDC 服务器机房，直接进入低权重观察池；\n2. **DNS 与 IP 地理位置冲突**：  \n   节点 IP 显示为美国洛杉矶，但 DNS 查询返回的却是香港或中国大陆运营商的 DNS 服务器；\n3. **系统软硬件指纹穿透**：  \n   手机中仍插入了中国大陆运营商的 SIM 卡（即使已停用）、手机系统时间未调为目标地区时区、未关闭系统级定位服务 (GPS)。\n\n### 2. 标准运营环境搭建规范\n\n- **网络层**：使用如【隐形人】或【灵动云】专用的美国/英国双 ISP 纯净原生节点，绑定固定出口；\n- **配置层**：开启客户端防 DNS 泄露，在 `whoer.net` 测试中伪装度必须达到 **100%**；\n- **硬件层**：建议采用专门的外贸运营机（海外版 iPhone 或 Pixel），拔出 SIM 卡，语言设置为英文，时区与节点一致。"
  },
  {
    "id": "cross-border-ecommerce-finance-security",
    "category": "streaming",
    "categoryLabel": "流媒体与跨境业务",
    "categoryIcon": "🎬",
    "question": "Amazon、PayPal、Stripe、eBay 跨境收款与电商店铺运营的节点安全红线？",
    "shortSummary": "严禁使用公共免费或万人共享的廉价机场节点登录金融与收款后台。高价值账号必须使用具有独立静态纯净 IP 或双 ISP 原生住宅 IP 的专线通道，避免关联封店封号。",
    "tags": [
      "跨境电商",
      "PayPal防封",
      "Amazon防关联",
      "Stripe收款",
      "商业安全"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 跨境金融机构的反欺诈联动机制\n\nPayPal、Stripe、eBay 与亚马逊商家平台拥有全行业最灵敏的跨行反洗钱与欺诈防御模型。其系统会实时采集登录 IP 的历史黑名单记录：\n- **同 IP 关联封号**：如果同一个 IP 曾被其他违规被封的店铺或诈骗账号使用过，后续使用该 IP 登录的所有正规店铺将直接被判定为关联账号（Suspension Linked Accounts），导致资金冻结；\n- **异常异地登录风控**：若上一小时在德国 IP 登录，下一小时漂移至香港 IP 提交提现申请，系统会立即触发永久风控审查并要求上传护照与水电账单。\n\n### 2. 外贸与出海金融人员的实操准则\n\n1. 登录店铺与财务后台时，关闭全局自动切换策略组，固定使用经过安全检测的专属原生专线节点；\n2. 规模化店铺矩阵建议搭配专门的防关联指纹浏览器（如 AdsPower、Hubstudio），每个店铺单独绑定专属固定节点，将物理设备指纹与网络通道完全隔离开来。"
  },
  {
    "id": "proxy-protocols-deep-comparison",
    "category": "protocols",
    "categoryLabel": "现代协议与安全",
    "categoryIcon": "🛡️",
    "question": "Shadowsocks、VLESS Reality、Trojan、Hysteria 2、TUIC v5 现代代理协议硬核对比？",
    "shortSummary": "Shadowsocks 协议开销小、专线吞吐最高；Trojan 与 VLESS Reality 伪装成真实合法 HTTPS 流量，抗公网封锁能力极强；Hysteria 2 与 TUIC v5 基于 UDP 单边加速，适合恶劣丢包网络。",
    "tags": [
      "Shadowsocks",
      "VLESS Reality",
      "Trojan",
      "Hysteria 2",
      "TUIC",
      "协议对比"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 主流代理协议全维度对比矩阵\n\n| 协议名称 | 传输层基础 | 流量伪装机制 | CPU 资源消耗 | 抗公网探测封锁 | 典型应用场景 |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Shadowsocks (AEAD)** | TCP / UDP | 对称加密，无特定特征 | **极低 (路由友好)** | 中等 (易受主动探测) | **IEPL/IPLC 物理专线首选**，吞吐性能之王 |\n| **Trojan** | TCP (TLS) | 伪装成标准 HTTPS 网站 | 中等 | 高 (标准 TLS 握手) | 广泛兼容各类中高端机场 |\n| **VLESS (Reality)** | TCP (TLS) | **借用真实大厂证书伪装** | 中等 | **最高 (公网伪装天花板)** | 公网直连与公网中继必备，杜绝封锁 |\n| **Hysteria 2 (歇斯底里)** | **UDP (QUIC)** | 暴力拥塞控制 + 伪装 | 较高 | 高 | 高延迟、跨洋高丢包恶劣网络快速起死回生 |\n| **TUIC v5** | **UDP (QUIC)** | 原生 QUIC 0-RTT 握手 | 较高 | 高 | 移动网络下快速重连与多路复用 |\n\n### 2. 为什么没有“全能最完美”的协议？\n\n协议的选择完全取决于底层物理链路的属性：\n- 如果是**物理内网专线 (IEPL)**：链路本身就不过防火墙，根本无需耗费 CPU 算力去做复杂的伪装，**Shadowsocks** 凭其极简的数据包头设计，能发挥出最高的吞吐极限和最低的 CPU 占用；\n- 如果走的是**公网中继或公网直连**：流量随时暴露在公网探测下，则必须依赖 **VLESS Reality** 或 **Hysteria 2** 的强大伪装机制，以安全换取生存空间。"
  },
  {
    "id": "vless-reality-principle",
    "category": "protocols",
    "categoryLabel": "现代协议与安全",
    "categoryIcon": "🛡️",
    "question": "什么是 VLESS Reality 协议？为什么说它是目前公网公认最强的抗 GFW 主动探测协议？",
    "shortSummary": "Reality 摆脱了以往自签名 TLS 证书容易被主动探测识破的缺陷，直接借用（偷取）海外正规大厂（如苹果、微软、雅虎）的真实合法 TLS 证书完成握手验证，使审查系统无法区分其与正规 HTTPS 流量的差异。",
    "tags": [
      "VLESS",
      "Reality",
      "主动探测",
      "TLS伪装",
      "抗封锁"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 传统 TLS 代理方案的阿喀琉斯之踵\n\n在 Trojan 和传统 VLESS 出现初期，大家普遍使用自签名证书或免费 Let's Encrypt 证书挂靠在伪装域名上。这种方案存在一个致命漏洞：防火墙可以主动向该服务器的 443 端口发起随机 TLS 探测握手。如果服务器返回的证书域名与其实际注册信息不符，或者其 TLS 指纹特征明显，该 IP 就会立刻被防火墙列入可疑黑名单并迅速予以阻断。\n\n### 2. VLESS Reality 的破局革命\n\nXray 团队研发的 **Reality 协议**彻底重构了安全握手逻辑：\n1. **真实证书借用 (No Self-Cert)**：服务端不再需要申请任何证书，而是“借用”海外大型权威网站（如 `www.apple.com`、`gateway.icloud.com` 等）的真实公钥与 SNI 证书；\n2. **中间人拦截鉴权**：当合法客户端发送带有预设私钥特征的握手包时，服务端予以认证并进入加密代理隧道；\n3. **主动探测重定向**：如果防火墙或未知扫描器主动来探测该端口，服务端会直接原封不动地将请求透明转发给目标真实大厂网站，返回与正规苹果/微软官网完全一致的标准响应！这种设计使得任何主动嗅探在数学与逻辑上均无法识破代理伪装。"
  },
  {
    "id": "hysteria-2-pros-and-cons",
    "category": "protocols",
    "categoryLabel": "现代协议与安全",
    "categoryIcon": "🛡️",
    "question": "Hysteria 2 (歇斯底里) 协议在恶劣网络下真能起死回生吗？它对运营商宽带有什么要求？",
    "shortSummary": "Hysteria 2 基于 UDP 协议与定制版拥塞控制算法，即使在 20%~30% 的高丢包网络中依然能强行跑满可用下行带宽；但其致命短板在于部分省份运营商会对民用 UDP 实施严厉的 QoS 限速封杀。",
    "tags": [
      "Hysteria 2",
      "UDP加速",
      "恶劣网络",
      "QoS限速",
      "协议优缺点"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. Hysteria 2 为什么能在高丢包下“狂飙”？\n\n传统的 TCP 协议只要发生 1 个数据包丢失，就会立刻触发退避算法并将发送速率砍半（甚至降低至 1/4）。而在国际长距离跨洋传输中，轻微的丢包极其常见。\n\n**Hysteria 2 的核心突破**：\n- 它完全重写了传输控制逻辑，采用类似 BBR 的专用拥塞控制机制（Brutal 拥塞算法）；\n- 它不再将丢包盲目视为网络拥塞信号，即使丢包率高达 20%，服务端依然按照预设带宽马力全开持续推送数据包，并通过轻量级冗余校验快速修补丢失数据，从而在恶劣丢包网络下维持极高吞吐。\n\n### 2. Hysteria 2 的局限性与“水土不服”\n\n- **运营商 UDP 封杀 (UDP QoS)**：中国部分省份的电信与移动宽带对民用公网 UDP 流量存在严格的 QoS 限速策略（当检测到特定端口在持续爆发大流量 UDP 时，直接将该端口限速至 1Mbps 以下或大幅丢包）；\n- **设备耗电与发热**：由于需要持续计算包序列并处理无序数据重组，移动端手机或性能较弱的软路由器在长时间运行 Hysteria 2 时，发热与电量消耗明显高于轻量级的 Shadowsocks。"
  },
  {
    "id": "why-dedicated-lines-use-ss-trojan",
    "category": "protocols",
    "categoryLabel": "现代协议与安全",
    "categoryIcon": "🛡️",
    "question": "为什么顶级企业 IEPL 专线大多坚持采用 Shadowsocks 或 Trojan，而非看似更花哨的新协议？",
    "shortSummary": "IEPL 专线走内网传输，物理层本就不受公网防火墙探测威胁，无需复杂的伪装握手。Shadowsocks 协议头极简、CPU 占用极低且支持万兆硬件加速，是保障晚高峰吞吐与低抖动的最优解。",
    "tags": [
      "Shadowsocks",
      "专线协议",
      "硬件加速",
      "性能极限",
      "架构设计"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 消除伪装开销，回归纯粹性能\n\n在没有防火墙威胁的封闭物理内网（IEPL / IPLC）中，强行套用复杂的伪装协议（如 Reality 或多层 WebSocket 混淆）就像是在封闭赛车道里非要开一辆披着泥土伪装迷彩的货车，不仅多此一举，还会带来额外的延迟开销与 CPU 性能浪费：\n- **极小协议头开销**：Shadowsocks (AEAD) 的数据包封装头部仅有数字节，有效载荷比 (Payload Ratio) 超过 98%；\n- **现代 CPU 硬件指令集支持**：现代手机芯片 (Apple Silicon, 骁龙) 以及主流 PC CPU 均内建针对 AES-GCM 与 ChaCha20-Poly1305 的硬件级加密指令加速。在进行万兆吞吐测试时，Shadowsocks 能以接近 0 的 CPU 损耗完成数据加解密。\n\n### 2. 全平台兼容性与软路由友好度\n\nShadowsocks 与 Trojan 经过了长达数年的全平台生态适配，无论是上千元的顶级软路由还是百元级的家用 OpenWrt 路由器，均能稳定跑满千兆带宽而不死机。这也是一线旗舰专线（如**隐形人**、**微风网络**）始终以 SS / Trojan 作为主力交付协议的核心工程原因。"
  },
  {
    "id": "client-ecosystem-matrix-2026",
    "category": "clients",
    "categoryLabel": "客户端选型与调优",
    "categoryIcon": "💻",
    "question": "2026 全平台客户端生态选型：Clash Verge Rev、Sing-box、Shadowrocket、Surge 该如何选？",
    "shortSummary": "Windows/macOS 首选现代化的 Clash Verge Rev；iOS 标配高性价比 Shadowrocket (小火箭)；追求轻量跨平台极客选 Sing-box；预算充裕的苹果全家桶用户选旗舰 Surge。",
    "tags": [
      "Clash Verge Rev",
      "Sing-box",
      "Shadowrocket",
      "Surge",
      "客户端对比"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 2026 主流科学上网客户端生态横评\n\n| 客户端名称 | 适配操作系统 | 开源/费用 | 内核引擎 | 核心优势 | 推荐适配人群 |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Clash Verge Rev** | Windows / macOS / Linux | 免费开源 | Mihomo (原Clash.Meta) | 基于 Tauri 构建，界面极美观，内存占用超低，TUN 一键接管 | **桌面电脑首选主力 (95% 用户)** |\n| **Sing-box** | 全平台 (iOS/Android/Win/Mac) | 免费开源 | 原生 Sing-box | 原生支持新一代通用协议，内存极低，移动端耗电控制极佳 | 极客玩家与多端轻量用户 |\n| **Shadowrocket (小火箭)** | iOS / iPadOS / macOS | 付费 ($2.99) | 自研引擎 | 规则配置极其成熟，节点一键导入，UI 简洁直观，抗封锁强 | **所有 iPhone / iPad 用户必买** |\n| **Surge** | iOS / macOS | 高端买断制 (较贵) | 自研高性能 | 业界最强的网络捕获分析诊断、极致低功耗、脚本扩展 | 苹果生态极客与网络工程师 |\n| **v2rayN** | Windows | 免费开源 | Xray / Sing-box | 协议支持最全，更新极快，但界面较为传统 | 极客协议测试与备用工具 |\n\n### 2. 选型闭坑总结\n\n如果您是日常在 PC 或 Mac 办公娱乐，直接下载并使用 **Clash Verge Rev** 即可获得最佳视觉体验与分流便利；苹果手机用户进入美区 App Store 花费约 $2.99 购入 **Shadowrocket** 即可享受终身稳定的跨国加速体验。"
  },
  {
    "id": "fake-ip-vs-redir-host",
    "category": "clients",
    "categoryLabel": "客户端选型与调优",
    "categoryIcon": "💻",
    "question": "Clash 与 Sing-box 中的 Fake-IP 模式与 Redir-Host 模式有何本质差异？为何强烈建议开启 Fake-IP？",
    "shortSummary": "Redir-Host 需要等待真实的 DNS 解析完成后再决定路由，延迟高且易受 DNS 投毒；Fake-IP 会在本地瞬间返回虚拟内网 IP 并建立映射表，实现真正的 DNS 零延迟响应与防污染。",
    "tags": [
      "Fake-IP",
      "Redir-Host",
      "DNS优化",
      "防污染",
      "客户端调优"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 传统 Redir-Host 模式的痛点\n\n在传统的 Redir-Host 模式下，当您在浏览器输入 `www.google.com` 时：\n1. 本地系统必须先向 DNS 服务器发起一次真实的域名解析请求；\n2. 由于存在网络往返与本地运营商的 GFW DNS 污染，解析过程可能耗时 100-300ms，甚至返回一个错误的虚假 IP 地址；\n3. 客户端拿到真实 IP 后，再比对分流规则决定是否走代理。这种机制导致打开每一个网页都会产生肉眼可见的“初始加载停顿”。\n\n### 2. Fake-IP (虚拟 IP 映射) 的颠覆性优势\n\n在 **Fake-IP 模式** 下，工作流程发生了革命性变化：\n- 当操作系统向客户端发起 DNS 查询时，Mihomo 内核在 **0 毫秒** 内立即分配并返回一个特殊的保留私有 IP（例如 `198.18.0.2`），同时在内核内存中记录映射关系；\n- 浏览器拿到这个虚拟 IP 后瞬间发起 TCP 握手数据包；\n- 客户端在网络驱动层拦截该数据包，直接将其还原为原始域名 `www.google.com`，直接送入远程专线节点在境外落地端进行干净快速的解析！\n- **最终体验**：彻底规避国内 DNS 投毒污染，网页首屏加载实现真正的“零感知毫秒级秒开”。"
  },
  {
    "id": "tun-virtual-nic-explained",
    "category": "clients",
    "categoryLabel": "客户端选型与调优",
    "categoryIcon": "💻",
    "question": "什么是 TUN 虚拟网卡模式？它与传统“系统代理 (System Proxy)”在网络协议栈层面的区别？",
    "shortSummary": "系统代理工作在应用层 (L7)，仅对支持 HTTP 代理的图形软件生效；TUN 模式在系统底层虚拟出一张网络接口卡 (L3 网络层)，接管整机所有 TCP/UDP 流量，解决命令行与游戏漏跑痛点。",
    "tags": [
      "TUN模式",
      "虚拟网卡",
      "系统代理",
      "网络层",
      "全流量接管"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 系统代理 (System Proxy) 的盲区\n\n常规开启客户端时，默认启动的是“系统代理”。这只是在 Windows 注册表或 macOS 系统偏好设置中设置了 HTTP/SOCKS 环境变量：\n- **能代理的应用**：Chrome、Edge、Safari、Telegram、Slack 等标准应用层桌面软件；\n- **完全无法代理的应用**：\n  - Windows 终端里的 `cmd`、`PowerShell`、`git`、`ssh`；\n  - 微软应用商店 (UWP) 应用；\n  - 绝大部分外服竞技类游戏与游戏启动器 (Steam、Epic、Battle.net)；\n  - 采用裸 UDP Socket 通信的实时通信组件。\n\n### 2. TUN 虚拟网卡的核心原理\n\n开启 **TUN 模式** 后：\n1. 内核会在系统中安装一个高性能的虚拟网卡驱动（如 Wintun）；\n2. 客户端修改系统全局底层路由表，将默认网关指向这张虚拟网卡；\n3. 整台电脑产生的所有 L3 网络层 IP 数据包（无论来自哪个后台进程或软件），均被强制引流到客户端内核进行策略匹配。这彻底解决了软件不走代理、代码拉取超时以及游戏无法加速的历史顽疾。"
  },
  {
    "id": "fallback-url-test-strategy-groups",
    "category": "clients",
    "categoryLabel": "客户端选型与调优",
    "categoryIcon": "💻",
    "question": "策略组进阶：Fallback (故障转移) 与 URL-Test (延迟最低) 应该如何科学搭配使用？",
    "shortSummary": "普通大流量网页浏览推荐使用 URL-Test 自动选取延迟最低节点；但对登录状态和会话敏感的场景（AI 对话、流媒体追剧、在线办公），必须使用 Fallback 或手工指定节点，防止连接频繁漂移。",
    "tags": [
      "策略组",
      "Fallback",
      "URL-Test",
      "高可用配置",
      "Clash调优"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 深度辨析两大自动化策略组行为模式\n\n- **URL-Test (自动测速选择)**：  \n  客户端按照设定的时间间隔（如每 300 秒）向测试地址发送测速请求，**始终自动绑定延迟最低的那一个节点**。  \n  *潜在隐患*：当某两个节点延迟仅相差 2ms 时，网络微小抖动就会导致连接频繁在两地跳跃，造成网页 Session 失效、网银强制登出以及 ChatGPT 触发风控。\n- **Fallback (故障转移选择)**：  \n  客户端按照预设的节点列表优先级，**长期固定使用排在第一位的健康节点**。只有当第一节点发生连续超时或彻底故障不可用时，才会顺序切换至第二备用节点；一旦第一节点恢复健康，自动平滑切回。\n\n### 2. 资深网络工程师的最佳推荐实践\n\n1. **主力科学上网策略组 (Proxy / Auto)**：使用 `Fallback` 策略组，按【香港 01 IEPL -> 香港 02 IEPL -> 日本 01 IEPL】的顺序排布，保障平时使用单点延迟极稳，且故障时秒级有备无患；\n2. **下载与测速策略组**：可采用 `URL-Test` 或多节点负载均衡，榨干多条线路的最高并发带宽。"
  },
  {
    "id": "avoid-long-term-annual-traps",
    "category": "pricing",
    "categoryLabel": "资费精算与避坑",
    "categoryIcon": "💰",
    "question": "为什么资深老手一致告诫：“新手切忌一次性买断超长年付”？",
    "shortSummary": "机场运营受上游机房政策、海底光缆稳定以及运营团队精力影响极大。新手应当坚持“先月付验货，好用再季度付/半年付”的策略，将试错与沉没风险降到最低。",
    "tags": [
      "防割指南",
      "年付陷阱",
      "避坑心得",
      "资金安全",
      "选型策略"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 为什么“超低价大促年付”往往是跑路预警？\n\n在跨国网络加速圈，有一条流传多年的定律：**“凡是一上来就搞 3 年、5 年超长买断，或者年付低至几十元还送上千 G 流量的无名新机场，90% 都在半年内卷款关站。”**\n\n**背后的恶性商业闭环**：\n1. 运营者以低价年付吸纳大量预付费资金；\n2. 随着涌入用户成倍增长，带宽成本与服务器开销呈指数级攀升；\n3. 后续没有足够的新增现金流去维持高昂的专线机房续费，节点逐渐变慢、变卡；\n4. 运营者发现继续运营将持续亏损，于是直接关停服务器、清空 Telegram 群组彻底失联，开启下一个换皮机场继续收割。\n\n### 2. 科学订购的三步法金律\n\n- **第一步：先订一个月付尝鲜**：花费十元左右，实测自家本地宽带在晚高峰 20:30-22:30 的真实表现；\n- **第二步：关注敏感期与稳定性**：至少经历一次特殊时期网络大考，检验商家的备用容灾与客服响应速度；\n- **第三步：精算折扣再上年付**：如确实体验极佳、口碑常青（如本榜推荐的头部品牌），再结合专属折扣码（如 `yxr888` 等）购买其年付主力包，折合每月仅需几元，既省钱又踏实。"
  },
  {
    "id": "rate-multiplier-trap",
    "category": "pricing",
    "categoryLabel": "资费精算与避坑",
    "categoryIcon": "💰",
    "question": "什么是机场的“倍率刺客”？0.5x、1.0x 与 5.0x 节点实际流量是如何扣除的？",
    "shortSummary": "倍率代表节点扣除流量的乘数。5.0x 高倍率节点意味着实际下载 1GB 视频会扣除 5GB 账户配额；部分低价机场用廉价低倍率揽客，实则好用节点全是超高倍率刺客。",
    "tags": [
      "倍率刺客",
      "流量陷阱",
      "计费规则",
      "避坑指南",
      "资费精算"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 节点计费倍率公式大起底\n\n**实际扣除账户流量 = 实际传输流量 × 节点计费倍率**\n\n- **0.5x 节点**：实际消耗 10GB 流量，仅从账户扣除 5GB（多见于冷门地区中继或非高峰大流量节点）；\n- **1.0x 节点 (标准良心倍率)**：消耗 10GB 扣除 10GB，账目清爽透明；\n- **3.0x - 5.0x 节点 (高倍率刺客)**：实际观看一部 10GB 的 4K 电影，账户瞬间被扣除 **30GB - 50GB**！\n\n### 2. 无良商家的营销猫腻\n\n许多宣称“9.9 元包月 500GB 巨额流量”的无良机场，用户购买后才发现：\n- 节点列表中速度奇慢、频繁断流的冷门节点是 1.0x；\n- 而真正能流畅看 4K、低延迟的香港和日本专线，全部被偷偷标注为 **3.5x 甚至 5.0x 倍率**！\n- 所谓的 500GB 实际上只能当 100GB 用，折算后的真实单价反而比一线高端专线还要贵。\n\n在选择服务商时，务必关注其是否具备**“全节点统一 1.0x 真实倍率”**的承诺保障。"
  },
  {
    "id": "pay-as-you-go-backup-plan",
    "category": "pricing",
    "categoryLabel": "资费精算与避坑",
    "categoryIcon": "💰",
    "question": "为什么说“一次性按量付费不限时套餐”是每位出海用户的必备防失联神器？",
    "shortSummary": "不限时按量包没有自然月到期清零压力，买一次可用数年。不仅适合轻量查资料用户，更是对冲主力机场突发故障时的最佳备用“第二安全梯队”。",
    "tags": [
      "按量付费",
      "不限时长",
      "防失联备用",
      "轻度用户",
      "应急容灾"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 周期清零套餐的痛点\n\n绝大多数机场套餐均基于自然月周期计费（例如每月 100GB，到期未用完的流量直接清零作废）。对于不常看视频、主要出差查阅技术文档、收发海外邮件的轻度用户而言，每月 80% 的已付费流量都被白白浪费。\n\n### 2. 一次性不限时套餐的战略价值\n\n- **永久有效，用完为止**：花几十元购买一个 100GB - 300GB 的不限时包，即使放置半年不用，流量余额分毫不少；\n- **企业与个人防失联的第二重保险**：  \n  无论您当前的主力机场有多强大，没有任何一家跨国服务商能 100% 承诺永不故障。聪明的用户通常会遵循**“主备冗余原则”**：\n  - 主力日常：使用高性价比的月付/年付专线套餐；\n  - 备用容灾：导入一个一次性不过期按量节点（如【隐形人-微光随行】或【灵动云】不限时包）。当主力链路突发故障时，一键秒切备用节点，工作与业务从不断线。"
  },
  {
    "id": "detect-exit-scam-signals",
    "category": "pricing",
    "categoryLabel": "资费精算与避坑",
    "categoryIcon": "💰",
    "question": "机场跑路前有哪些明显前兆？如何从支付通道、工单响应、TG 禁言识别高危服务商？",
    "shortSummary": "跑路前通常具备以下特征：突然开启超长年付骨折大促、官方 Telegram 群全员禁言、工单超过 24 小时无人回应、以及微信支付宝正规支付通道降级为高风险个人转账收款码。",
    "tags": [
      "跑路前兆",
      "风险预警",
      "TG群禁言",
      "工单响应",
      "安全审计"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 机场非正常运营的四大高危红色信号\n\n1. **突然反常大幅降价推“永久会员/多年付”**：  \n   原本正常运营的机场，突然群发邮件推销“99 元终身无限流量”或“充值 200 送 300”，这往往是资金链断裂前进行的最后一波恶意卷款收割；\n2. **官方 Telegram 社群开启全员禁言**：  \n   正常机场的官方群组是用户反馈问题、交流配置的地方。一旦管理员突然解散交流群、转为单向通知频道，或者对提出节点断流质疑的用户疯狂封禁踢人，说明节点已经出现大面积故障，运营者已经放弃维护；\n3. **技术工单超时沉没**：  \n   连续数天提交的线路报修工单无人认领，后台客服完全处于失联状态；\n4. **收款方式频繁变为个人码或虚拟货币**：  \n   正规企业发卡接口被第三方支付风控清退，转为个人微信收款二维码甚至仅支持 USDT 结账。\n\n遇到上述任一信号，切勿再往账户续费任何资金，并尽快将订阅备份转移至稳定服务商。"
  },
  {
    "id": "gaming-udp-fullcone-nat",
    "category": "gaming",
    "categoryLabel": "外服电竞与全屋",
    "categoryIcon": "🎮",
    "question": "能用机场专线打外服电竞网游（如 Apex、瓦罗兰特、Steam）吗？FullCone NAT 与 UDP 核心要点？",
    "shortSummary": "只要节点具备完整的 UDP 转发能力、FullCone NAT 属性与超低抖动专线，完全可以代替甚至超越传统游戏加速器；但缺乏 UDP 支持的廉价中继会导致游戏无法连接大厅。",
    "tags": [
      "游戏加速",
      "Apex",
      "瓦罗兰特",
      "FullCone NAT",
      "UDP转发"
    ],
    "featuredOnHome": true,
    "fullAnswer": "### 1. 为什么很多普通中继机场“能看 4K，但打不了游戏”？\n\n很多用户发现用机场看 YouTube 极快，但一打开 Steam 联机或进入《Apex 英雄》、《CS2》时，却提示无法与对战服务器连接，或者在对战中疯狂瞬移丢包。\n\n**核心技术根源**：\n- 网页浏览和流媒体几乎全部基于 **TCP** 协议；\n- 而实时多人联机竞技游戏为了追求极低帧延迟，全部采用无握手的 **UDP** 数据包通信；\n- 很多廉价机场为了降低服务器开销并防范 UDP 泛洪攻击（DDoS），在服务端直接掐死或封禁了 UDP 协议的转发，导致游戏数据包全被丢弃。\n\n### 2. 具备游戏加速能力的优质专线指标\n\n1. **必须支持 FullCone NAT (NAT1) 转发**：保证玩家作为 P2P 主机时能被其他跨国玩家正常穿透直连，匹配无障碍；\n2. **物理抖动 (Jitter) 控制在 2ms 以内**：专线内网直接互联，不丢包、不开开门倒车；\n3. **在客户端中开启 TUN 模式并放行 UDP**：例如在 Clash Verge Rev 中确认开启全局虚拟网卡接管所有本地游戏对战进程。"
  },
  {
    "id": "openwrt-passwall-home-network",
    "category": "gaming",
    "categoryLabel": "外服电竞与全屋",
    "categoryIcon": "🎮",
    "question": "局域网全屋科学上网架构：旁路由 (OpenWrt) 与软路由透明代理部署要点？",
    "shortSummary": "通过在软路由部署 PassWall 或 OpenClash，主路由负责拨号与 WiFi 发送，旁路由负责透明代理与 DNS 清洗，实现家里电视 Apple TV、Switch 与手机无需安装客户端即插即出海。",
    "tags": [
      "OpenWrt",
      "旁路由",
      "软路由",
      "透明代理",
      "全屋智能"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 为什么“旁路由架构”是全家出海的最佳方案？\n\n如果给家里每一台手机、iPad、笔记本和电视盒子分别安装配置客户端，不仅管理繁琐，而且 Apple TV、PS5、Nintendo Switch 等主机设备本身根本无法原生安装 Clash 等软件。\n\n**旁路由 (Side-Gateway) 的优雅之处**：\n- **主路由**（如华硕、小米路由器）：负责光猫拨号 (PPPoE) 与高速 WiFi 覆盖，保证即使旁路由关机重启，家里的普通网络与父母上网完全不受丝毫影响；\n- **旁路由**（如工控机软路由 N100、电视盒子改装小主机）：刷入 OpenWrt 系统，运行 **PassWall** 或 **OpenClash** 插件；\n- **按需分流**：只需把需要科学上网的设备（如 Apple TV 或主机）的网络设置中，“默认网关”和“DNS”手动修改为旁路由的 IP，该设备即可自动实现全透明出海。\n\n### 2. 旁路由防环路与 DNS 污染核心防线\n\n- 在 OpenWrt 网络接口设置中，关闭旁路由自身的 DHCP 服务，防止与主路由产生局域网 IP 冲突；\n- 开启中国 IP 段绕过 (ChinaDNS-NG)，确保访问国内局域网 NAS、爱优腾视频以局域网极速直通，仅跨国流量走 IEPL 专线。"
  },
  {
    "id": "steam-community-store-error-fix",
    "category": "gaming",
    "categoryLabel": "外服电竞与全屋",
    "categoryIcon": "🎮",
    "question": "Steam 商店与社区出现 118 / 105 错误代码的根本原因与彻底修复方法？",
    "shortSummary": "Steam 社区与商店采用 Akamai 全球 CDN。因特定阻断与证书污染导致无法加载。开启客户端 TUN 模式或配置专门的 Steam 分流规则即可秒级修复。",
    "tags": [
      "Steam 118",
      "Steam社区",
      "Akamai CDN",
      "游戏修复",
      "TUN模式"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 错误代码 118 / 105 的技术成因\n\n在不开启加速的情况下打开 Steam 客户端好友列表、个人资料、创意工坊或社区讨论区，极高概率弹出 `错误代码: -118 (无法载入网页，服务器无响应)`。这是由于 Valve 使用的 Steam 社区域名 `steamcommunity.com` 在国内受到了长期的针对性 DNS 投毒与 TLS SNI 阻断。\n\n### 2. 三种秒级解决之道\n\n1. **一键开启 Clash Verge Rev 的 TUN 模式**：接管整机网络后，Steam 的所有请求直接在虚拟网卡层被转发到专线节点，错误瞬间消失；\n2. **规则分流补全**：确认订阅分流规则中包含了 `SteamCN` 直连与 `Steam` 境外走代理的分离规则。Steam 下载游戏的大流量 CDN 文件建议走国内直连跑满千兆带宽，而个人资料与商店页面走专线节点秒开；\n3. **禁用客户端本地 Hosts 冲突**：部分加速软件曾自动修改过系统的 `C:\\Windows\\System32\\drivers\\etc\\hosts` 文件，如仍有报错，检查并清理其中的旧 Steam 静态 IP 绑定。"
  },
  {
    "id": "switch-ps5-console-acceleration",
    "category": "gaming",
    "categoryLabel": "外服电竞与全屋",
    "categoryIcon": "🎮",
    "question": "Nintendo Switch 与 PS5 主机如何借助电脑客户端快速实现游戏加速与 NAT A 级优化？",
    "shortSummary": "利用电脑客户端的“允许局域网连接 (Allow LAN)”功能，在主机网络设置中手动填入电脑局域网 IP 与代理端口，或通过 TUN 模式启用 Windows 网络共享即可畅玩外服联机。",
    "tags": [
      "Switch加速",
      "PS5联机",
      "NAT类型",
      "局域网共享",
      "主机游戏"
    ],
    "featuredOnHome": false,
    "fullAnswer": "### 1. 无需购买硬件加速盒的局域网共享法\n\n许多主机玩家以为必须购买专门的硬件游戏加速盒子。其实，只要您的电脑与 Switch / PS5 处于同一个局域网 WiFi 下，利用现有的 Clash 客户端即可实现高品质主机加速：\n\n1. **电脑客户端开启共享**：在 Clash Verge Rev 设置中，将 **「允许来自局域网的连接 (Allow LAN)」** 开关打开；\n2. **查看电脑内网 IP**：在电脑命令行运行 `ipconfig`，找到本地局域网 IPv4 地址（例如 `192.168.1.50`）；\n3. **主机端网络手动配置**：\n   - 打开 Switch 或 PS5 的网络设置，进入当前 WiFi 的高级设置；\n   - 将代理服务器 (Proxy Server) 改为“使用”；\n   - 地址填入电脑的 IP `192.168.1.50`，端口填入客户端的本地 HTTP 端口（通常为 `7897` 或 `7890`）；\n   - 保存并进行连接测试。\n\n### 2. 优化至 NAT Type A / B 级的关键\n\n确保所选专线节点支持 **FullCone NAT**。在 Switch 测速中，如果 NAT 类型从原先严格受限的 C/D 级提升至 **NAT Type A 或 B**，即代表能够与全球任意玩家无障碍秒进房间对战。"
  }
];

export const HOME_FEATURED_FAQS = ALL_FAQS.filter((f) => f.featuredOnHome);
