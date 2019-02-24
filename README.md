# react-i18n

react-i18n provides functionalities for text translation and localization. Unlike many other i18n libraries with react-i18n you can store your default texts within the translation definitions. This way you don't have to duplicate default texts for many components.

[![npm version](https://badge.fury.io/js/%40gehrmanng%2Freact-i18n.svg)](https://badge.fury.io/js/%40gehrmanng%2Freact-i18n) [![downloads](https://img.shields.io/npm/dm/%40gehrmanng%2Freact-i18n.svg)](https://npm-stat.com/charts.html?package=%40gehrmanng%2Freact-i18n) ![license](https://img.shields.io/npm/l/@gehrmanng/react-i18n.svg)

## Dependencies

react-i18n uses [markdown-to-jxs](https://probablyup.com/markdown-to-jsx/) for basic Markdown formatting.

## Installation

Installing via npm:

```sh
npm install --save @gehrmanng/react-i18n
```

ES6:

```js
import { I18nProvider } from "@gehrmanng/react-i18n";
```

## Examples

Setup translations and the default / fallback language:

```js
import { I18nProvider } from "@gehrmanng/react-i18n";

const translations = {
  en: {
    label: {
      example: {
        text: "This is a simple example text",
        currentDate: "The current date is: _date_"
      }
    }
  }
};

// Render the app
render(
  <I18nProvider defaultLanguage="en" translations={translations}>
    <App />
  </I18nProvider>,
  document.getElementById("root")
);
```

Setting the langauge:

```js
import { I18nContext, TYPES } from "@gehrmanng/react-i18n";

function ExampleApp() {
  // Get the dispatch method from the i18n context
  const { dispatch } = useContext(I18nContext);

  const setLanguage = () => dispatch({ type: TYPES.SET_LANGUAGE, payload: "de" });

  return (
    <div>
      <button type="button" onClick={setLanguage}>
        Deutsch
      </button>
    </div>
  );
}
```

Use the I18n component:

```js
// Local component and context imports
import I18n from "@gehrmanng/react-i18n";

function ExampleApp() {
  return (
    <div>
      <I18n i18nKey="label.example.text" />
    </div>
  );
}
```

Use the I18n component with variable text parts (same for HOC and hook):

```js
// Local component and context imports
import I18n from "@gehrmanng/react-i18n";

function ExampleApp() {
  return (
    <div>
      <I18n i18nKey="label.example.currentDate" vars={{ currentDate: new Date() }} />
    </div>
  );
}
```

Use the i18n HOC:

```js
import { withI18n } from "@gehrmanng/react-i18n";

class ExampleComponent extends PureComponent {
  static propTypes = {
    i18n: PropTypes.object.isRequired
  };

  render() {
    const { i18n } = this.props;
    const text = i18n.translate("label.example.text");
    return <span>{text}</span>;
  }
}

export default withI18n(ExampleComponent);
```

Use the i18n hook:

```js
import { useI18n } from "@gehrmanng/react-i18n";

function ExampleApp() {
  const translate = useI18n();
  const text = translate("label.example.text");
  return <div>{text}</div>;
}
```

Use Markdown formatting:

[markdown-to-jxs](https://probablyup.com/markdown-to-jsx/) is used for basic Markdown formatting. Additional options as described in the markdown-to-jsx documentation are not yet supported.

```js
const translations = {
  en: {
    label: {
      example: {
        text: "This is a **formatted** example text",
      }
    }
  }
};
...
```

```js
import { useI18n } from "@gehrmanng/react-i18n";

function ExampleApp() {
  const translate = useI18n();
  // The second parameter enables Markdown formatting
  const text = translate("label.example.text", true);
  return <div>{text}</div>;
}
```

Result: This is a **formatted** example text

The HOC takes the same parameter as well, the \<I18n> component takes a markdown attribute to enable formatting.

### LICENSE

The project is licensed under the terms of [MIT license](https://github.com/gehrmanng/react-i18n/blob/master/LICENSE)
