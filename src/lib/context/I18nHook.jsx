// Library imports
import React, { useContext } from 'react';
import Markdown from 'markdown-to-jsx';

// Local imports
import { I18nContext } from './I18nContext';
import translate from './utils';

/**
 * A hook to get a translation for the given i18n key.
 *
 * @param {string} i18nKey The i18n translation key
 * @param {object} [vars] Optional placeholder variables with their values
 * @returns {function} A translate function
 */
export default function useI18n() {
  // Get the context state and destructure it to the required properties
  const { state } = useContext(I18nContext);
  const { defaultLanguage, language, translations } = state;

  return (i18nKey, markdown, vars) => {
    const translation = translate(i18nKey, defaultLanguage, language, translations, vars);
    return markdown ? <Markdown>{translation}</Markdown> : translation;
  };
}
