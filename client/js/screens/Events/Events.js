import React from 'react';
import {View} from 'react-native';
import EventCard from '../../components/EventCard';
import styles from './styles';

const Events = ({events, navigation}) => {
  return (
    <View style={styles.events}>
      {/* {events &&
        events.map(event => ( */}
      <EventCard event={event} navigation={navigation} />
      {/* ))} */}
    </View>
  );
};

export default Events;
