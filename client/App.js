import React, {Component} from 'react';
import EventsContainer from './js/screens/Events';
import {View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <EventsContainer />
      </View>
    );
  }
}
