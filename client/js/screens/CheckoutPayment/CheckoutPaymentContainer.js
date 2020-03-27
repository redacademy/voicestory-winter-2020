import React, {Component} from 'react';
import CheckoutPayment from './CheckoutPayment';

export default class CheckoutPaymentContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CheckoutPayment navigation={this.props.navigation} />;
  }
}
