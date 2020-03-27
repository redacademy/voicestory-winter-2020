import React, {Component} from 'react';
import CheckoutInfo from './CheckoutInfo';

export default class CheckoutInfoContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CheckoutInfo navigation={this.props.navigation} />;
  }
}
