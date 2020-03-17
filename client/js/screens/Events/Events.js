import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Events = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('EventInfo')}>
      <Text>Event Info</Text>
    </TouchableOpacity>
  );
};

export default Events;
