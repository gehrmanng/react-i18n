// Library imports
import React, { useState, useContext } from 'react';

// Local component and context imports
import I18n, { I18nContext, TYPES, useI18n } from '../lib';
import ExampleComponent from './ExampleComponent';

/**
 * Functional component to create an example application.
 *
 * @returns {jsx} The component markup
 */
export default function ExampleApp() {
  // Create a count state
  const [counter, setCounter] = useState(0);

  // Get the dispatch method from the i18n context
  const { dispatch } = useContext(I18nContext);

  // Get the translate function from hook
  const translate = useI18n();

  // Create and return the markup
  return (
    <div>
      <I18n i18nKey="label.example.text" />
      <br />
      <I18n i18nKey="label.example.count" vars={{ counter }} />
      <br />
      <I18n i18nKey="label.example.default" />
      <br />
      <I18n i18nKey="label.example.not.existing" />
      <br />
      <ExampleComponent />
      <br />
      <br />
      <button type="button" onClick={() => dispatch({ type: TYPES.SET_LANGUAGE, payload: 'en' })}>
        English
      </button>
      <button type="button" onClick={() => dispatch({ type: TYPES.SET_LANGUAGE, payload: 'de' })}>
        Deutsch
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: TYPES.SET_LANGUAGE, payload: 'de_AT' })}
      >
        Deutsch (AT)
      </button>
      <button type="button" onClick={() => dispatch({ type: TYPES.SET_LANGUAGE, payload: 'zh' })}>
        中国
      </button>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {translate('button.counter')}
      </button>
    </div>
  );
}
