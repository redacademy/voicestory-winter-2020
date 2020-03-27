import React, {Component} from 'react';
import Checkout from './Checkout';

export default class CheckoutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <Checkout
        event={this.props.route.params.event}
        navigation={this.props.navigation}
      />
    );
  }
}
