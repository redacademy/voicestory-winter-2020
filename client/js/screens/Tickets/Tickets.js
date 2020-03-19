import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';

const Tickets = ({navigation, tickets}) => {
  console.log(tickets);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Ticket Info')}>
      <Text>Ticket Info</Text>
    </TouchableOpacity>
  );
};

export default Tickets;
