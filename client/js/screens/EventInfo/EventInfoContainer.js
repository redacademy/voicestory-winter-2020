import React, {Component} from 'react';
import EventInfo from './EventInfo';

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
