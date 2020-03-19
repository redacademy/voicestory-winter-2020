import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import Button from '../../components/Button/';

const TicketInfo = ({navigation}) => {
  return (
    <Button
      bgcolor="#D84F48"
      text="View Ticket"
      onPress={() => navigation.navigate('QRCode')}
    />
  );
};

export default TicketInfo;
