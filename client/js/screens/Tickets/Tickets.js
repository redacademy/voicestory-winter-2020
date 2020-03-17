import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tickets = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('TicketInfo')}>
      <Text>Ticket Info</Text>
    </TouchableOpacity>
  );
};

export default Tickets;
