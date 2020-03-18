import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';

const TicketInfo = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('QRCode')}>
      <Text>View QR Ticket</Text>
    </TouchableOpacity>
  );
};

export default TicketInfo;
