import React, {Component} from 'react';
import TicketInfo from './TicketInfo';
import PropTypes from 'prop-types';
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

TicketInfoContainer.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
};
