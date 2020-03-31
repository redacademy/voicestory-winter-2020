import React, {Component} from 'react';
import Ticket from './Ticket';

export default class TicketContainer extends Component {
  render() {
    return <Ticket navigation={this.props.navigation} />;
  }
}
Theme.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
