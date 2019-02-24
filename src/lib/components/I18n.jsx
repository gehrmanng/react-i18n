// Library imports
import PropTypes from 'prop-types';

// Local hook import
import useI18n from '../context/I18nHook';

/**
 * A functional component that translates a given i18n key into a localized text.
 *
 * @param {object} props The component properties
 * @returns {string} The translated text or the given i18n key of no translation could be found.
 */
function I18n({ i18nKey, vars }) {
  const translate = useI18n();
  return translate(i18nKey, vars);
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
