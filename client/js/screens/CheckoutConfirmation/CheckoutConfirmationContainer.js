import React, {Component} from 'react';
import CheckoutConfirmation from './CheckoutConfirmation';
import PropTypes from 'prop-types';

export default class CheckoutConfirmationContainer extends Component {
  render() {
    return (
      <CheckoutConfirmation
        event={this.props.route.params.event}
        navigation={this.props.navigation}
      />
    );
  }
}

CheckoutConfirmationContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
