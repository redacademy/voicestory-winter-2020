import React from 'react';
import {View} from 'react-native';
import EventCard from '../../components/EventCard';
import styles from './styles';

const Events = ({events, route, navigation}) => {
  return (
    <View style={styles.events}>
      {events &&
        events.map(event => (
          <EventCard
            key={event}
            event={event}
            route={route}
            navigation={navigation}
          />
        ))}
    </View>
  );
};

export default Events;
