import React from 'react';
import {Text, View} from 'react-native';

import EventCard from '../../components/EventCard';
import styles from './styles';

const Events = () => {
  return (
    <>
      <Text>Events Page</Text>
      <View style={styles.events}>
        <EventCard />
      </View>
    </>
  );
};

export default Events;
