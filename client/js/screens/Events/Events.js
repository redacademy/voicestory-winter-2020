import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import EventCard from '../../components/EventCard';
import styles from './styles';

const Events = ({navigation}) => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('EventInfo')}>
          <Text>Event Info</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.events}>
        <EventCard />
      </View>
    </>
  );
};

export default Events;
