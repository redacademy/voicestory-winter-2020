import React, {Component} from 'react';
import EventInfo from './EventInfo';
import PropTypes from 'prop-types';

export default class EventInfoContainer extends Component {
  render() {
    return (
      <EventInfo
        event={this.props.route.params.event}
        navigation={this.props.navigation}
      />
    );
  }
}

EventInfoContainer.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};
