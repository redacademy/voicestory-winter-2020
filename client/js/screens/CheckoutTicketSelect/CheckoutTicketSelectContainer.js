import React, {Component} from 'react';
import CheckoutTicketSelect from './CheckoutTicketSelect';

export default class CheckoutTicketSelectContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CheckoutTicketSelect navigation={this.props.navigation} />;
  }
}
