# react-i18n

## Installation

Install via npm:

### Node / NPM

Installing via npm:

```sh
npm install --save @gehrmanng/react-i18n
```

ES6:

```js
import { I18nProvider } from "@gehrmanng/react-i18n";
```

### Examples

Setup translations and the default / fallback language:

```js
import { I18nProvider } from "@gehrmanng/react-i18n";

const translations = {
  en: {
    label: {
      example: {
        text: "This is a simple example text"
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

Use the translations:

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
