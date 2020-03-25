import React, {Component} from 'react';
import Checkout from './Checkout';

export default class CheckoutContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Checkout navigation={this.props.navigation} />;
  }
}
