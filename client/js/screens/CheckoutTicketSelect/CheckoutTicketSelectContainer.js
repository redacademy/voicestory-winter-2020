import React, {Component} from 'react';
import CheckoutTicketSelect from './CheckoutTicketSelect';

export default class CheckoutTicketSelectContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <CheckoutTicketSelect
        // event={this.props.route.params.event}
        navigation={this.props.navigation}
      />
    );
  }
}
