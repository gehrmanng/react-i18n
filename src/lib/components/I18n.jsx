// Library imports
import { useContext } from 'react';
import PropTypes from 'prop-types';

// Local context import
import { I18nContext } from '../context/I18nContext';

/**
 * A functional component that translates a given i18n key into a localized text.
 *
 * @param {object} props The component properties
 * @returns {string} The translated text or the given i18n key of no translation could be found.
 */
function I18n({ i18nKey, vars }) {
  // Get the context state and destructure it to the required properties
  const { state } = useContext(I18nContext);
  const { defaultLanguage, language, translations } = state;

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

  // Replace all text placeholder with given values
  Object.entries(vars).forEach(([key, value]) => {
    translation = translation.replace(new RegExp(`_${key}_`, 'g'), value);
  });

  return translation;
}

// Set component property types
I18n.propTypes = {
  i18nKey: PropTypes.string.isRequired,
  vars: PropTypes.object,
};

// Set default property values
I18n.defaultProps = {
  vars: {},
};

// Export the component as default
export default I18n;
