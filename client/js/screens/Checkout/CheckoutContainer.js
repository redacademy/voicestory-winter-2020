import React, {Component} from 'react';
import Checkout from './Checkout';

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
