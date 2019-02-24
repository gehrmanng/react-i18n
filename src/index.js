/* eslint-disable react/jsx-filename-extension */
// Library imports
import React from 'react';
import { render } from 'react-dom';

// Local component and provider import
import { I18nProvider } from './lib';
import ExampleApp from './example/ExampleApp';

// Translation definitions
const translations = {
  en: {
    label: {
      example: {
        text: 'This is a simple example text',
        count: 'This is an example text with a counter: _counter_',
        default: 'Use default language',
        usingHOC: 'This text is translated using a HOC',
        formatted: 'This is a **formatted** _text_',
        placeholder: 'Placeholder text',
      },
    },
    button: {
      counter: 'Increase counter',
    },
  },
  de: {
    label: {
      example: {
        text: 'Dies ist ein einfacher Beispieltext',
        count: 'Dies ist ein Beispieltext mit einem Zähler: _counter_',
        usingHOC: 'Dieser Text wurde durch ein HOC übersetzt',
      },
    },
    button: {
      counter: 'Zähler erhöhen',
    },
  },
  de_AT: {
    label: {
      example: {
        text: 'Dies ist ein einfacher Beispieltext (AT)',
        count: 'Dies ist ein Beispieltext mit einem Zähler: _counter_ (AT)',
        usingHOC: 'Dieser Text wurde durch ein HOC übersetzt (AT)',
      },
    },
  },
  zh: {
    label: {
      example: { text: '这是一个示例文本', count: '这是一个带有计数器的示例文本：_counter_' },
    },
    button: {
      counter: '增加柜台',
    },
  },
};

// Render the app
render(
  <I18nProvider defaultLanguage="en" translations={translations}>
    <ExampleApp />
  </I18nProvider>,
  document.getElementById('root'),
);
