import React, {Component} from 'react';
import CheckoutConfirmation from './CheckoutConfirmation';

export default class CheckoutConfirmationContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CheckoutConfirmation
        event={this.props.route.params.event}
        navigation={this.props.navigation}
      />
    );
  }
}
