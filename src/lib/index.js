// Import all i18n components and constants
import {
  I18nContext, I18nProvider, I18nConsumer, TYPES,
} from './context/I18nContext';
import I18n from './components/I18n';

// Export the translation component as default
export default I18n;

// Export everything else
export {
  I18nContext, I18nProvider, I18nConsumer, TYPES,
};
