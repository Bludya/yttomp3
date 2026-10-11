// The 10 most spoken languages (total speakers). Flip `enabled` once a
// translation file exists in ./ — only enabled locales get pages, hreflang
// tags and sitemap entries.
export interface Locale {
  code: string; // URL segment
  hreflang: string;
  ogLocale: string;
  name: string; // native name, shown in the switcher
  dir: 'ltr' | 'rtl';
  enabled: boolean;
}

export const defaultLocale = 'en';

export const locales: Locale[] = [
  { code: 'en', hreflang: 'en', ogLocale: 'en_US', name: 'English', dir: 'ltr', enabled: true },
  { code: 'zh', hreflang: 'zh-Hans', ogLocale: 'zh_CN', name: '中文', dir: 'ltr', enabled: false },
  { code: 'hi', hreflang: 'hi', ogLocale: 'hi_IN', name: 'हिन्दी', dir: 'ltr', enabled: false },
  { code: 'es', hreflang: 'es', ogLocale: 'es_ES', name: 'Español', dir: 'ltr', enabled: false },
  { code: 'fr', hreflang: 'fr', ogLocale: 'fr_FR', name: 'Français', dir: 'ltr', enabled: false },
  { code: 'ar', hreflang: 'ar', ogLocale: 'ar_AR', name: 'العربية', dir: 'rtl', enabled: false },
  { code: 'bn', hreflang: 'bn', ogLocale: 'bn_BD', name: 'বাংলা', dir: 'ltr', enabled: false },
  { code: 'pt', hreflang: 'pt', ogLocale: 'pt_BR', name: 'Português', dir: 'ltr', enabled: false },
  { code: 'ru', hreflang: 'ru', ogLocale: 'ru_RU', name: 'Русский', dir: 'ltr', enabled: false },
  { code: 'ur', hreflang: 'ur', ogLocale: 'ur_PK', name: 'اردو', dir: 'rtl', enabled: false },
];

export const enabledLocales = locales.filter((l) => l.enabled);

export function getLocale(code: string): Locale {
  return locales.find((l) => l.code === code) ?? locales[0];
}

export function localePath(code: string): string {
  return code === defaultLocale ? '/' : `/${code}/`;
}
