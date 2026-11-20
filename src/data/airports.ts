export interface Airport {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  badgeColor?: 'blue' | 'emerald' | 'amber' | 'rose' | 'purple';
  price: string;
  priceNote?: string;
  traffic: string;
  lineType: string;
  protocols: string[];
  unlocks: string[];
  features: string[];
  rating: number;
  reviewCount: number;
  discountCode?: string;
  discountNote?: string;
  affUrl: string;
  reviewSlug?: string;
  speedPeak: string;
  isRecommended?: boolean;
}

export const AIRPORTS: Airport[] = [
  {
    id: "yinxingren",
    name: "隐形人",
    tagline: "全IEPL顶级纯净专线，超强隐私与抗封锁防护，晚高峰4K秒开",
    badge: "🏆 2026顶级抗封锁推荐",
    badgeColor: "blue",
    price: "¥15.00",
    priceNote: "/月起",
    traffic: "120GB - 1000GB",
    lineType: "纯IEPL企业专线",
    protocols: ["Shadowsocks", "VLESS (Reality)", "Trojan"],
    unlocks: ["ChatGPT", "Claude 3.5", "Netflix 4K", "Disney+", "YouTube Premium", "TikTok"],
    features: [
      "自建深港/沪日高等级 IEPL 内网专线，延迟低至 32ms",
      "针对 OpenAI / Claude 等 AI 平台特别部署原生住宅 IP",
      "晚高峰 0 丢包率，全天候 4K/8K 视频拖拽无缓冲",
      "支持 Windows / Mac / iOS / Android 一键订阅导入"
    ],
    rating: 4.9,
    reviewCount: 428,
    discountCode: "yxr888",
    discountNote: "专属优惠码",
    affUrl: "https://varnexa.invisibleaff.com/#/?code=JF4seZUy",
    reviewSlug: "yinxingren",
    speedPeak: "650 Mbps+ (晚高峰极速秒开)",
    isRecommended: true
  },
  {
    id: "muguang",
    name: "暮光加速",
    tagline: "大带宽优质专线，高码率4K流媒体播放与多设备极速冲浪",
    badge: "⚡ 晚高峰极速秒开",
    badgeColor: "purple",
    price: "¥12.80",
    priceNote: "/月起",
    traffic: "150GB - 1200GB",
    lineType: "BGP隧道 + 专线加速",
    protocols: ["Shadowsocks", "Hysteria 2", "VLESS"],
    unlocks: ["Netflix 4K", "Disney+", "YouTube 4K", "ChatGPT", "TikTok"],
    features: [
      "多入口 BGP 智能路由，自动切换最优线路",
      "全节点解锁全球主流流媒体平台及版权限制",
      "支持最新 Hysteria 2 协议，弱网环境吞吐率极高",
      "不限同时在线设备数，全家共享更实惠"
    ],
    rating: 4.9,
    reviewCount: 395,
    discountCode: "mm88",
    discountNote: "立享专属特惠",
    affUrl: "https://varnexa.twilightaff.com/#/?code=3qqonTlH",
    reviewSlug: "muguang",
    speedPeak: "590 Mbps+ (稳定不卡顿)",
    isRecommended: true
  },
  {
    id: "breezenet",
    name: "微风网络 Breezenet",
    tagline: "清爽稳定老牌口碑团队，多入口智能负载均衡与容灾架构",
    badge: "🌟 高口碑稳定首选",
    badgeColor: "emerald",
    price: "¥16.00",
    priceNote: "/月起",
    traffic: "160GB - 1500GB",
    lineType: "多入口 BGP 中继专线",
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    unlocks: ["ChatGPT", "Claude", "Netflix 4K", "Disney+", "Hulu"],
    features: [
      "运营超 3 年的高口碑团队，超强冗余容灾保障不失联",
      "香港、日本、新加坡、美国核心节点晚高峰丢包率低于 0.3%",
      "提供独享游戏加速分组，Steam / 瓦罗兰特外服超低延迟",
      "全平台客户端一键配置教程完善，中文客服秒级响应"
    ],
    rating: 4.8,
    reviewCount: 360,
    discountCode: "weifeng90",
    discountNote: "全场9折专属优惠码",
    affUrl: "https://edp01.breezenetaff.com/#/?code=4KDOroY0",
    reviewSlug: "breezenet",
    speedPeak: "560 Mbps+ (全天稳定跑满)",
    isRecommended: true
  },
  {
    id: "flycat",
    name: "飞猫云",
    tagline: "大流量超值性价比之王，学生党与高码率视频下载党首选",
    badge: "🐱 性价比大流量之王",
    badgeColor: "amber",
    price: "¥9.90",
    priceNote: "/月起",
    traffic: "200GB - 2000GB",
    lineType: "高速隧道中继",
    protocols: ["Shadowsocks", "VLESS", "Hysteria 2"],
    unlocks: ["ChatGPT", "YouTube 4K", "TikTok", "Twitter/X"],
    features: [
      "月付不足十元起，大流量包量足价优，门槛极低",
      "针对 YouTube、Twitter、Instagram 做了专门的高并发分流",
      "支持 Sing-box、Clash Verge 等全平台客户端一键导入",
      "支持支付宝、USDT 等多种安全快捷付款渠道"
    ],
    rating: 4.7,
    reviewCount: 310,
    discountCode: "flycat888",
    discountNote: "专属优惠券",
    affUrl: "https://flycat1.flycatvipaff.cc/#/?code=Os3T3OxW",
    reviewSlug: "flycat",
    speedPeak: "480 Mbps+ (性价比超群)",
    isRecommended: true
  },
  {
    id: "dalaocloud",
    name: "大佬云",
    tagline: "企业级高净值商业专线，超低延迟，AI 生产力与商务办公首选",
    badge: "💼 企业级高端专线",
    badgeColor: "blue",
    price: "¥20.00",
    priceNote: "/月起",
    traffic: "200GB - 2500GB",
    lineType: "纯IEPL商业专线",
    protocols: ["Shadowsocks", "VLESS (Reality)", "Trojan"],
    unlocks: ["ChatGPT 4o", "Claude 3.5", "Midjourney", "Netflix 4K", "Disney+"],
    features: [
      "专为生产力用户打造，独享 IP 池彻底告别 OpenAI Access Denied 报错",
      "全专线低延迟，跨国视频会议、远程桌面办公丝滑流畅",
      "多地 BGP 入口智能路由，保障核心业务 99.99% 在线率",
      "VIP 专属技术客服 1 对 1 支持"
    ],
    rating: 4.9,
    reviewCount: 480,
    affUrl: "https://vip.dalaocloud.com/#/?code=05KusH3b",
    reviewSlug: "dalaocloud",
    speedPeak: "720 Mbps+ (企业级极速带宽)",
    isRecommended: true
  },
  {
    id: "flyv",
    name: "飞V",
    tagline: "轻快敏捷新一代机场，低延迟、快响应、4K秒开",
    badge: "🚀 极速冲浪神器",
    badgeColor: "rose",
    price: "¥11.00",
    priceNote: "/月起",
    traffic: "120GB - 800GB",
    lineType: "优质 BGP 专线",
    protocols: ["Shadowsocks", "Hysteria 2"],
    unlocks: ["ChatGPT", "YouTube 4K", "TikTok", "Disney+"],
    features: [
      "全新架构优化，网页打开与客户端响应飞快",
      "支持新一代 Hysteria 2 协议对抗恶劣弱网环境",
      "支持节点一键批量延迟测速与自动选择最优节点",
      "套餐灵活，适合日常轻度与中度冲浪用户"
    ],
    rating: 4.7,
    reviewCount: 235,
    discountCode: "fly1111",
    discountNote: "专享福利优惠码",
    affUrl: "https://varnexa.flyvaff.com/#/?code=IC0p64fi",
    reviewSlug: "flyv",
    speedPeak: "510 Mbps+",
    isRecommended: false
  },
  {
    id: "wavenet",
    name: "浪网 WaveNet",
    tagline: "汹涌澎湃的下行速度，重度 4K 蓝光流媒体与大文件下载神器",
    badge: "🌊 4K海量视频首选",
    badgeColor: "blue",
    price: "¥15.80",
    priceNote: "/月起",
    traffic: "250GB - 1600GB",
    lineType: "高带宽 IEPL 中继",
    protocols: ["Shadowsocks", "VLESS", "Trojan"],
    unlocks: ["Netflix 4K", "Disney+", "YouTube Premium", "ChatGPT", "HBO Max"],
    features: [
      "超大带宽管道，高峰期多条香港、日本节点同时跑满 500M+",
      "全节点流媒体原生解锁，支持 Infuse、Emby 播放外海资源",
      "支持 Clash、Sing-box、Surge、Shadowrocket 订阅",
      "提供定期节点测速报告，线路状态一目了然"
    ],
    rating: 4.8,
    reviewCount: 325,
    discountCode: "lw888",
    discountNote: "专属优惠码",
    affUrl: "https://varnexa.wavenetaff.com/#/?code=j468t9eF",
    reviewSlug: "wavenet",
    speedPeak: "610 Mbps+",
    isRecommended: false
  },
  {
    id: "lingdong",
    name: "灵动云",
    tagline: "节点灵活机动，智能动态路由，外服游戏电竞超低丢包",
    badge: "🎮 游戏电竞低延迟",
    badgeColor: "emerald",
    price: "¥13.50",
    priceNote: "/月起",
    traffic: "130GB - 900GB",
    lineType: "低延迟专线加速",
    protocols: ["Shadowsocks", "Hysteria 2", "Sing-box"],
    unlocks: ["ChatGPT", "Steam", "Apex 英雄", "Valorant", "Netflix"],
    features: [
      "特别优化外服联机节点，日韩港专线游戏 Ping 延迟 30ms 级",
      "针对 UDP 协议做了专项传输优化，告别联机丢包跳 Ping",
      "全平台极速导入，支持一键切换游戏专区节点",
      "提供 Telegram 官方交流群与实时工单响应"
    ],
    rating: 4.8,
    reviewCount: 260,
    discountCode: "ld888",
    discountNote: "专属优惠码",
    affUrl: "https://varnexa.lingdongaff.com/#/?code=QcRK6OPG",
    reviewSlug: "lingdong",
    speedPeak: "530 Mbps+",
    isRecommended: false
  },
  {
    id: "laddercloud",
    name: "梯子云 LadderCloud",
    tagline: "通俗易懂的老牌云加速服务，傻瓜式操作与稳定品质",
    badge: "🪜 新手入门必备",
    badgeColor: "amber",
    price: "¥12.00",
    priceNote: "/月起",
    traffic: "100GB - 700GB",
    lineType: "多线隧道专线",
    protocols: ["Shadowsocks", "Trojan"],
    unlocks: ["ChatGPT", "Netflix", "YouTube 4K", "Twitter/X"],
    features: [
      "新手友好度极高，提供图文小白配置教程",
      "一键导入主流客户端，免去繁琐手动配置步骤",
      "价格实惠透明，无隐藏收费与捆绑消费",
      "全节点稳定运行，适合长期省心使用"
    ],
    rating: 4.6,
    reviewCount: 210,
    affUrl: "https://varnexa.ladderaff.com/#/?code=KSmLLEnR",
    reviewSlug: "laddercloud",
    speedPeak: "460 Mbps+",
    isRecommended: false
  },
  {
    id: "worryfree",
    name: "无忧链接",
    tagline: "7x24小时全天候高在线率，告别断连与维护烦恼",
    badge: "🛡️ 稳定无忧 零宕机",
    badgeColor: "purple",
    price: "¥14.00",
    priceNote: "/月起",
    traffic: "160GB - 1200GB",
    lineType: "双重高可用中继",
    protocols: ["Shadowsocks", "VLESS", "Trojan"],
    unlocks: ["ChatGPT", "Claude", "Netflix 4K", "Disney+"],
    features: [
      "双入口备份容灾系统，敏感时期自动切换备用光缆",
      "全节点高纯净度 IP，海外网站访问顺畅少弹验证码",
      "支持多设备同时在线使用，合租共享无压力",
      "承诺不虚标带宽，晚高峰保障基础流畅体验"
    ],
    rating: 4.8,
    reviewCount: 315,
    discountCode: "wuyou666",
    discountNote: "无忧专属折扣码",
    affUrl: "https://wep01.worryfreeaff.com/#/?code=56A0RTpU",
    reviewSlug: "worryfree",
    speedPeak: "520 Mbps+",
    isRecommended: false
  },
  {
    id: "firefly",
    name: "Firefly机场",
    tagline: "暗夜中的明亮极速之光，新协议低丢包强劲穿透校园网",
    badge: "🔥 超强抗干扰穿透",
    badgeColor: "rose",
    price: "¥10.00",
    priceNote: "/月起",
    traffic: "100GB - 800GB",
    lineType: "全协议混合专线",
    protocols: ["Hysteria 2", "VLESS (Reality)", "Shadowsocks"],
    unlocks: ["ChatGPT", "TikTok", "YouTube 4K", "Instagram"],
    features: [
      "全面支持 Hysteria 2 协议，在校园网、移动宽带环境下表现亮眼",
      "穿透力强，抗网络 QOS 审查能力出众",
      "年轻化 UI 交互后台，订阅拉取速度极快",
      "月付门槛仅需十元，支持无忧尝鲜体验"
    ],
    rating: 4.7,
    reviewCount: 245,
    discountCode: "firefly",
    discountNote: "官方专属福利码",
    affUrl: "https://vip02.fireflyaff.com/#/?code=Fes6j9rn",
    reviewSlug: "firefly",
    speedPeak: "540 Mbps+",
    isRecommended: false
  },
  {
    id: "civet",
    name: "灵猫",
    tagline: "敏捷机动的高速节点群，覆盖全球多个小众国家地区",
    badge: "🐾 全球冷门多节点",
    badgeColor: "emerald",
    price: "¥13.00",
    priceNote: "/月起",
    traffic: "150GB - 1000GB",
    lineType: "全 BGP 优质隧道",
    protocols: ["Shadowsocks", "Trojan"],
    unlocks: ["ChatGPT", "Netflix", "Disney+", "Hulu", "BBC iPlayer"],
    features: [
      "除港澳台日美韩等热门地区外，兼顾欧洲、东南亚等小众节点",
      "适合跨境电商多店铺运营、本土内容采集与多区域账户注册",
      "线路平稳，日常流量消耗计费透明精确",
      "全天候节点健康检查，异常节点自动告警修复"
    ],
    rating: 4.7,
    reviewCount: 195,
    affUrl: "https://vip02.civetaff.com/#/?code=kZlRw46w",
    reviewSlug: "civet",
    speedPeak: "490 Mbps+",
    isRecommended: false
  },
  {
    id: "flashleap",
    name: "闪跃 FlashLeap",
    tagline: "闪电般瞬间越过晚高峰拥堵，专线高敏吞吐秒开体验",
    badge: "⚡ 闪电极速专线",
    badgeColor: "blue",
    price: "¥14.50",
    priceNote: "/月起",
    traffic: "180GB - 1200GB",
    lineType: "IEPL高速直通专线",
    protocols: ["Shadowsocks", "VLESS", "Hysteria 2"],
    unlocks: ["ChatGPT 4o", "Claude 3.5", "Netflix 4K", "YouTube Premium"],
    features: [
      "全专线低时延网络架构，晚高峰大促期间无惧网络拥塞",
      "支持 4K HDR 视频秒开，拖动进度条丝滑不转圈",
      "住宅 IP 资源丰富，适合 AI 绘画 Midjourney 与学术搜索",
      "支持一键订阅转换与多协议自动匹配"
    ],
    rating: 4.9,
    reviewCount: 360,
    discountCode: "shanyue",
    discountNote: "专属大促优惠码",
    affUrl: "https://vip02.flashleapaff.com/#/?code=FkCGEeaC",
    reviewSlug: "flashleap",
    speedPeak: "630 Mbps+",
    isRecommended: true
  },
  {
    id: "kuajie",
    name: "跨界云",
    tagline: "外贸出海、科研学术与跨境电商一站式网络加速方案",
    badge: "🌐 外贸出海专享",
    badgeColor: "purple",
    price: "¥16.80",
    priceNote: "/月起",
    traffic: "200GB - 1500GB",
    lineType: "跨国企业商用专线",
    protocols: ["Shadowsocks", "Trojan", "VLESS"],
    unlocks: ["ChatGPT", "Claude", "Amazon", "PayPal", "TikTok", "Shopify"],
    features: [
      "面向外贸跨境企业、亚马逊/TK 卖家及科研团队深度定制",
      "纯净商用原生 IP，规避关联封店与支付风控警告",
      "高并发传输稳定，支持大容量产品图文与视频批量上传",
      "支持对公支付、开具发票及团队多子账号管理"
    ],
    rating: 4.8,
    reviewCount: 290,
    affUrl: "https://vip02.kuajieaff.com/#/?code=VfWeYwHM",
    reviewSlug: "kuajie",
    speedPeak: "600 Mbps+",
    isRecommended: false
  }
];

export const SITE_CONFIG = {
  title: "性价比机场",
  subtitle: "2026最新高性价比机场推荐与科学上网节点评测",
  description: "【性价比机场】专注精选 2026 最新稳定、便宜、高性价比翻墙节点与机场推荐，提供晚高峰真实测速、价格对比表格、优惠码汇总及 Clash Verge / Sing-box / Shadowrocket 客户端详细教程。",
  siteUrl: "https://xingjiabi-jichang.blog",
  author: "性价比机场团队",
  lastUpdated: "2026年最新季度更新",
  telegramChannel: "https://t.me/xingjiabi_jichang",
  contactEmail: "contact@xingjiabi-jichang.blog"
};
