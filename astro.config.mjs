import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import i18next from "astro-i18next";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  // only set `site` in production
  ...(isProd && {
    site: "https://milivojk13.github.io/capoeira-novi-sad/",
    base: "/capoeira-novi-sad/",
  }),

  // in dev, omit `site` (Astro will generate relative URLs)
  // you can still set a different base for dev if you like:
  ...(!isProd && {
    base: "/",
  }),
  integrations: [
    tailwind(),
    i18next({
      defaultLocale: "sr", // <-- Force Serbian as default
      base: isProd ? '/capoeira-novi-sad/' : '/',
      // ...other options
    }),
  ],
});
