import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://barrierefrei-badberatung.de',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'file',
    assets: '_assets'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: true
    }
  }
});
