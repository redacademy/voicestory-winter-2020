import React, {Component} from 'react';
import Ticket from './Ticket';

export default class TicketContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <Ticket
        // ticket={this.props.route.params.ticket}
        navigation={this.props.navigation}
      />
    );
  }
}
