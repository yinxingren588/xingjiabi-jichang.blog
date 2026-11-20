import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://xingjiabi-jichang.blog',
  server: {
    port: 3000,
    host: true,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/go/') && !page.includes('/404'),
      serialize(item) {
        const url = item.url;
        
        // 首页最高权重
        if (url === 'https://xingjiabi-jichang.blog/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
          item.lastmod = new Date();
        } 
        // 核心功能与榜单频道
        else if (url.endsWith('/airports/') || url.endsWith('/pricing/')) {
          item.changefreq = 'daily';
          item.priority = 0.95;
          item.lastmod = new Date();
        }
        // 权威 FAQ 知识库与测评目录
        else if (url.endsWith('/faq/') || url.endsWith('/reviews/')) {
          item.changefreq = 'daily';
          item.priority = 0.90;
          item.lastmod = new Date();
        }
        // 旗舰品牌深度评测（隐形人）
        else if (url.includes('/reviews/yinxingren')) {
          item.changefreq = 'weekly';
          item.priority = 0.88;
          item.lastmod = new Date();
        }
        // 其他品牌深度评测
        else if (url.includes('/reviews/')) {
          item.changefreq = 'weekly';
          item.priority = 0.82;
          item.lastmod = new Date();
        }
        // 客户端教程主页与各客户端配置指引
        else if (url.endsWith('/guides/')) {
          item.changefreq = 'weekly';
          item.priority = 0.80;
          item.lastmod = new Date();
        }
        else if (url.includes('/guides/')) {
          item.changefreq = 'monthly';
          item.priority = 0.75;
          item.lastmod = new Date();
        }
        // HTML 站点地图
        else if (url.endsWith('/sitemap/')) {
          item.changefreq = 'weekly';
          item.priority = 0.70;
          item.lastmod = new Date();
        }
        // 法律与免责声明
        else if (url.endsWith('/disclaimer/')) {
          item.changefreq = 'monthly';
          item.priority = 0.30;
          item.lastmod = new Date();
        }
        else {
          item.changefreq = 'weekly';
          item.priority = 0.70;
          item.lastmod = new Date();
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
