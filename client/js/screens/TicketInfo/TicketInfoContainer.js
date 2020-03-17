import React, {Component} from 'react';
import TicketInfo from './TicketInfo';

export default class TicketInfoContainer extends Component {
  render() {
    return <TicketInfo navigation={this.props.navigation} />;
  }
}
