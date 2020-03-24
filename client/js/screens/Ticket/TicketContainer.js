import React, {Component} from 'react';
import Ticket from './Ticket';

export default class TicketContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Ticket navigation={this.props.navigation} />;
  }
}
