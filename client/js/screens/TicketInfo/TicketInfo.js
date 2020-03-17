import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const TicketInfo = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('QRCode')}>
      <Text>View QR Ticket</Text>
    </TouchableOpacity>
  );
};

export default TicketInfo;
