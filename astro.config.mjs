// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { enabledLocales, defaultLocale } from './src/i18n/locales.ts';

export default defineConfig({
  site: 'https://ytomp4.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(enabledLocales.map((l) => [l.code, l.hreflang])),
      },
    }),
  ],
});
