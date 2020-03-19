import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';

const Tickets = ({navigation, tickets}) => {
  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('TicketInfo')}>
      <Text>Ticket Info</Text>
    </TouchableOpacity>
  );
};

export default Tickets;
