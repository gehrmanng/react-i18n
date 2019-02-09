// Library imports
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

// Context creation
const I18nContext = React.createContext();

const TYPES = {
  SET_TRANSLATIONS: 'SET_TRANSLATIONS',
  SET_DEFAULT_LANG: 'SET_DEFAULT_LANG',
  SET_LANGUAGE: 'SET_LANGUAGE',
};

// Reducer for context modifications
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_TRANSLATIONS: {
      return { ...state, translations: action.payload };
    }
    case TYPES.SET_DEFAULT_LANG: {
      return { ...state, defaultLanguage: action.payload };
    }
    case TYPES.SET_LANGUAGE: {
      return { ...state, language: action.payload };
    }
    default:
      return { ...state };
  }
};

/**
 * The i18n context provider.
 *
 * @param {object} props The provider component properties
 * @returns {jsx} The provider component markup
 */
function I18nProvider({ defaultLanguage, translations, children }) {
  const [state, dispatch] = useReducer(reducer, {
    defaultLanguage,
    translations,
    language: defaultLanguage,
  });
  const value = { state, dispatch };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

// Set provider property types
I18nProvider.propTypes = {
  defaultLanguage: PropTypes.string.isRequired,
  translations: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

// Create the i18n context consumer
const I18nConsumer = I18nContext.Consumer;

// Export context, provider and consumer
export {
  I18nContext, I18nProvider, I18nConsumer, TYPES,
};
