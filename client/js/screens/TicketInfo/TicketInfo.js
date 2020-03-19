import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import Button from '../../components/Button/';

const TicketInfo = ({navigation}) => {
  return (
    // <TouchableOpacity onPress={() => navigation.navigate('QRCode')}>
    <Button text="View Ticket" />
    // </TouchableOpacity>
  );
};

export default TicketInfo;
