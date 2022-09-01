import { createI18n } from 'vue-i18n'

export const DEFAULT_LANGUAGE = 'en'
export const BROWSER_LANGUAGE = navigator?.language?.split('-')[0]
export const PREV_DEFINED = localStorage.getItem('locale')

export function getMessages() {
  // eslint-disable-next-line
  let messages: any = {}

  const localeFiles = import.meta.globEager('../../locales/*.json') // Get files for auto generated messages (default file ex. locales/en.json)
  const extraFiles = import.meta.globEager('../../locales/extra/*.json') // Get files for extra messages, usual examples involve strings pulled from db (ex. locales/extra/en.json)

  const files = { ...localeFiles, ...extraFiles }

  for (const path in files) {
    const pathParts = path.split('/')
    const locale = pathParts[pathParts.length - 1].slice(0, -5)

    messages[locale] = messages[locale]
      ? { ...files[path].default, ...messages[locale] }
      : (messages[locale] = files[path].default)
  }
  return messages
}

const messages = getMessages()
const i18n = createI18n({
  locale: PREV_DEFINED
    ? PREV_DEFINED
    : Object.keys(messages).includes(BROWSER_LANGUAGE)
    ? BROWSER_LANGUAGE
    : DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  globalInjection: true,
  legacy: true,
  messages,
})

export default i18n
