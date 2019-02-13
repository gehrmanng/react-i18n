/**
 * Translate the given i18n key into the given language. If no translation for the given
 * key exists the default language will be used. If the key also does not exists for
 * the default language the key will be returned.
 *
 * @param {string} i18nKey The i18n translation key
 * @param {string} defaultLanguage The default / fallback language
 * @param {string} language The current language
 * @param {object} translations All available translations
 * @param {object} [vars] Optional placeholder variables with their values
 * @returns {string} The translated text or the i18n key if no translation could be found
 */
export default function translate(i18nKey, defaultLanguage, language, translations, vars) {
  // Get all localized translations for the current and default language
  const localizations = translations[language];
  const defaultLocalizations = translations[defaultLanguage];

  // Get the requested text for the current language
  let translation = i18nKey.split('.').reduce((o, k) => o && o[k], localizations);

  // If no text could be found but a country specific language was provided
  // try to found a text for the general language
  if (!translation && language.length === 5) {
    const lang = language.split('_')[0];
    const langLocalizations = translations[lang];
    translation = i18nKey.split('.').reduce((o, k) => o && o[k], langLocalizations);
  }

  // Still no text found, use default language as a fallback or the given i18n key if no text
  // is available even for the default language
  if (!translation) {
    translation = i18nKey.split('.').reduce((o, k) => o && o[k], defaultLocalizations) || i18nKey;
  }

  // Return translation if no variables are provided
  if (!vars) {
    return translation;
  }

  // Replace all text placeholder with given values
  Object.entries(vars).forEach(([key, value]) => {
    translation = translation.replace(new RegExp(`_${key}_`, 'g'), value);
  });

  return translation;
}
