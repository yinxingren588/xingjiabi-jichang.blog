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
    id: "feiyun-cloud",
    name: "飞云互联 (Feiyun)",
    tagline: "全IEPL顶级专线，晚高峰无视封锁，4K秒开",
    badge: "🏆 2026综合性价比首选",
    badgeColor: "blue",
    price: "¥18.80",
    priceNote: "/月起 (100GB)",
    traffic: "100GB - 1000GB",
    lineType: "纯IEPL企业专线",
    protocols: ["Shadowsocks", "VLESS (Reality)", "Hysteria 2"],
    unlocks: ["ChatGPT", "Claude", "Netflix 4K", "Disney+", "YouTube Premium", "TikTok"],
    features: [
      "全节点采用优质 IEPL 内网专线，延迟低至 35ms",
      "针对 OpenAI / Claude 等 AI 工具专门优化住宅 IP",
      "高峰期不降速，支持最多 5 台设备同时在线",
      "支持 Windows / Mac / iOS / Android 一键导入订阅"
    ],
    rating: 4.9,
    reviewCount: 328,
    discountCode: "XJB88",
    discountNote: "全场88折专属优惠码",
    affUrl: "https://example.com/aff/feiyun",
    reviewSlug: "feiyun-cloud",
    speedPeak: "650 Mbps+ (晚高峰 4K 拖拽秒起)",
    isRecommended: true
  },
  {
    id: "aurora-speed",
    name: "极光高速 (Aurora)",
    tagline: "老牌大厂背书，多入口 BGP 隧道中继，稳如磐石",
    badge: "⚡ 极致稳定 & 游戏低延迟",
    badgeColor: "emerald",
    price: "¥12.00",
    priceNote: "/月起 (120GB)",
    traffic: "120GB - 800GB",
    lineType: "多线 BGP + 专线加速",
    protocols: ["Shadowsocks", "Trojan"],
    unlocks: ["Netflix", "Disney+", "ChatGPT", "TikTok", "Hulu"],
    features: [
      "自建多地 BGP 入口，智能故障转移零宕机",
      "全节点解锁全球主流流媒体及本土版权",
      "提供独享游戏加速节点，外服电竞超低丢包",
      "年付送备用线路，支持退款保障"
    ],
    rating: 4.8,
    reviewCount: 245,
    discountCode: "JG90",
    discountNote: "年付9折优惠码",
    affUrl: "https://example.com/aff/aurora",
    reviewSlug: "aurora-speed",
    speedPeak: "480 Mbps+ (晚高峰极度稳定)",
    isRecommended: true
  },
  {
    id: "galaxy-network",
    name: "星河网络 (Galaxy)",
    tagline: "百元大流量性价比之王，学生党与轻度用户首选",
    badge: "💰 超便宜备用首选 (¥6/月)",
    badgeColor: "amber",
    price: "¥6.00",
    priceNote: "/月起 (60GB)",
    traffic: "60GB - 500GB",
    lineType: "公网隧道中继",
    protocols: ["VLESS", "Hysteria 2"],
    unlocks: ["ChatGPT", "YouTube 4K", "Twitter/X"],
    features: [
      "低至每月一杯奶茶钱，适合作为主力或紧急备用",
      "采用 Hysteria 2 协议对抗恶劣弱网环境",
      "无设备连接数限制，全家共享更实惠",
      "Telegram 实时状态监控与中文客服支持"
    ],
    rating: 4.6,
    reviewCount: 189,
    discountCode: "XINGHE95",
    discountNote: "新客专享95折",
    affUrl: "https://example.com/aff/galaxy",
    reviewSlug: "galaxy-network",
    speedPeak: "260 Mbps+ (性价比极高)",
    isRecommended: false
  },
  {
    id: "timeless-paygo",
    name: "时光云 (按量付费)",
    tagline: "流量永不过期，用多少扣多少，长期备用神器",
    badge: "♾️ 不限时按量付费",
    badgeColor: "purple",
    price: "¥39.00",
    priceNote: "/ 200GB (永久有效)",
    traffic: "200GB - 1000GB (不限时)",
    lineType: "IEPL内网专线 + 优质中继",
    protocols: ["Shadowsocks", "Trojan", "Sing-box"],
    unlocks: ["ChatGPT", "Claude", "Netflix", "Disney+"],
    features: [
      "没有月度清零压力，买一次可以用一年甚至更久",
      "高净值 IEPL 专线，敏感时期依然畅通",
      "适合平时用得少、只查资料/写代码/AI提问的用户",
      "支持多地节点智能负载均衡"
    ],
    rating: 4.7,
    reviewCount: 156,
    discountCode: "TIMENOLIMIT",
    discountNote: "按量包立减 5 元",
    affUrl: "https://example.com/aff/timeless",
    speedPeak: "400 Mbps+ (稳定不拥挤)",
    isRecommended: false
  }
];

export const SITE_CONFIG = {
  title: "性价比机场",
  subtitle: "2026最新高性价比机场推荐与科学上网节点评测",
  description: "【性价比机场】专注精选 2026 最新稳定、便宜、高性价比翻墙节点与机场推荐，提供晚高峰真实测速、价格对比表格、优惠码汇总及 Clash Verge / Sing-box / Shadowrocket 客户端详细教程。",
  siteUrl: "https://xingjiabi-jichang.blog",
  author: "性价比机场站长",
  lastUpdated: "2026年最新评测",
  telegramChannel: "https://t.me/xingjiabi_jichang",
  contactEmail: "contact@xingjiabi-jichang.blog"
};
