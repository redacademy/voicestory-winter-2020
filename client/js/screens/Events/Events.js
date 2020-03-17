import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';

const Events = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('EventInfo')}>
      <Text>Event Info</Text>
    </TouchableOpacity>
  );
};

export default Events;
