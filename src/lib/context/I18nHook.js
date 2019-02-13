// Library imports
import { useContext } from 'react';

// Local imports
import { I18nContext } from './I18nContext';
import translate from './utils';

/**
 * A hook to get a translation for the given i18n key.
 *
 * @param {string} i18nKey The i18n translation key
 * @param {object} [vars] Optional placeholder variables with their values
 * @returns {string} The translated text or the i18n key if no translation could be found
 */
export default function useI18n(i18nKey, vars) {
  // Get the context state and destructure it to the required properties
  const { state } = useContext(I18nContext);
  const { defaultLanguage, language, translations } = state;

  return translate(i18nKey, defaultLanguage, language, translations, vars);
}
