import type { InitOptions } from 'i18next';

export const fallbackLng = 'en';
export const locales = [fallbackLng, 'zh-CN', 'sv'] as const;
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = 'common';

export function getOptions(
  lang = fallbackLng,
  ns: string | string[] = defaultNS,
): InitOptions {
  return {
    defaultNS,
    fallbackLng,
    fallbackNS: defaultNS,
    lng: lang,
    ns,
    supportedLngs: locales,
  };
}
