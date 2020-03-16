import React, {Component} from 'react';
import EventsContainer from './js/screens/Events';
import ExploreContainer from './js/screens/Explore';
import TicketsContainer from './js/screens/Tickets';
import UserProfileContainer from './js/screens/UserProfile';
import {View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <ExploreContainer />
        <EventsContainer />
        <TicketsContainer />
        <UserProfileContainer />
      </View>
    );
  }
}
