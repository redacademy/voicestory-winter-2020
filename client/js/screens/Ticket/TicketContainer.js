import React, {Component} from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

export default class TicketContainer extends Component {
  render() {
    return <Ticket navigation={this.props.navigation} />;
  }
}
Theme.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
};
