// Library imports
import React from 'react';
import Markdown from 'markdown-to-jsx';

// Local imports
import { I18nConsumer } from './I18nContext';
import translate from './utils';

/**
 * A HOC to provide an i18n translation function.
 *
 * @param {object} WrappedComponent The wrapped component
 * @returns {jsx} The given component wrapped with the I18nConsumer and enhanced
 *                with additional properties
 */
export default function withI18n(WrappedComponent) {
  return props => (
    <I18nConsumer>
      {({ state }) => {
        const { defaultLanguage, language, translations } = state;
        const mergedProps = {
          ...props,
          i18n: {
            translate: (i18nKey, markdown, vars) => {
              const translation = translate(i18nKey, defaultLanguage, language, translations, vars);
              return markdown ? <Markdown>translation</Markdown> : translation;
            },
          },
        };
        return <WrappedComponent {...mergedProps} />;
      }}
    </I18nConsumer>
  );
}
