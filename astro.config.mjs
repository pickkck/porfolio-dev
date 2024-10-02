import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

const getDefaultLanguage = () => {
  const systemLang = process.env.LANG || process.env.LANGUAGE || 'en';
  return systemLang.startsWith('es') ? 'es' : 'en';
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/': `/${getDefaultLanguage()}/`,
  },
  i18n: {
    defaultLocale: getDefaultLanguage(),
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    }
  },
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});