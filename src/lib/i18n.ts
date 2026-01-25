import 'server-only'

export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'fr', 'ar'],
} as const

export type Locale = (typeof i18n)['locales'][number]

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
    const requestedDictionary = dictionaries[locale];
    if (requestedDictionary) {
        return requestedDictionary();
    }
    return dictionaries.en();
}