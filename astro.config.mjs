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
      filter: (page) => !page.includes('/go/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
