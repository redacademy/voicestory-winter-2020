import React, {Component} from 'react';
import EventInfo from './EventInfo';

export default class EventInfoContainer extends Component {
  render() {
    return <EventInfo navigation={this.props.navigation} />;
  }
}