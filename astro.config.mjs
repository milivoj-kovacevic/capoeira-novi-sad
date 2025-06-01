import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [tailwind()],
  base: isProd ? '/capoeira-novi-sad/' : '/',
});
