import es from "~/locale/es"
import en from "~/locale/en"
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'es',
    messages: {
        en: en,
        es: es
    }
}))
