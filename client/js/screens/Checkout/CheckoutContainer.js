import React, {Component} from 'react';
import Checkout from './Checkout';
import PropTypes from 'prop-types';

export default class CheckoutContainer extends Component {
  render() {
    return (
      <Checkout
        event={this.props.route.params.event}
        navigation={this.props.navigation}
      />
    );
  }
}

CheckoutContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
