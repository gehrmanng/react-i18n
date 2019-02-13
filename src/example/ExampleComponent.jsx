// Library imports
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// local HOC import
import { withI18n } from '../lib';

/**
 * An example component that uses an i18n HOC for text translation.
 */
class ExampleComponent extends PureComponent {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
  };

  render() {
    const { i18n } = this.props;
    const text = i18n.translate('label.example.usingHOC');
    return <span>{text}</span>;
  }
}

// Export the component as default
export default withI18n(ExampleComponent);
