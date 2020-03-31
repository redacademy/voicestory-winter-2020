import React, {Component} from 'react';
import TicketInfo from './TicketInfo';

export default class TicketInfoContainer extends Component {
  render() {
    return (
      <TicketInfo
        ticket={this.props.route.params.ownedTicket}
        navigation={this.props.navigation}
      />
    );
  }
}
