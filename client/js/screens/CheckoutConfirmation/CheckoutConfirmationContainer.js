import React, {Component} from 'react';
import CheckoutConfirmation from './CheckoutConfirmation';

export default class CheckoutConfirmationContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CheckoutConfirmation navigation={this.props.navigation} />;
  }
}
