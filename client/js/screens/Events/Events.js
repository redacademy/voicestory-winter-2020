import React from 'react';
import {View} from 'react-native';
import EventCard from '../../components/EventCard';
import styles from './styles';

const Events = ({navigation}) => {
  return (
    <View style={styles.events}>
      <EventCard navigation={navigation} />
    </View>
  );
};

export default Events;
