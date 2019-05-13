import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en'
import tr from './tr'
/**
 * create translator
 * @return {Promise<i18next.TFunction>}
 */
const createTranslator = () => new Promise((res, rej) => {
  i18next
    .use(LanguageDetector)
    .init({
      lng: 'en',
      debug: true,
      resources: {
        en,
        tr,
      },
    }, (err, t) => {
      if (err) {
        console.log('something went wrong loading', err)
        rej(err)
      }
      res(t)
    })
})

export default createTranslator
