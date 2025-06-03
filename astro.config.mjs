import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import i18next from 'astro-i18next';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  integrations: [
    tailwind(),
    i18next({
      defaultLocale: 'sr', // <-- Force Serbian as default
      // ...other options
    }),
  ],
});
