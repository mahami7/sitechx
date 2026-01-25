import 'server-only'
import { type Locale } from './i18n-config'

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
