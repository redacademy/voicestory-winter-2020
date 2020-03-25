import React from 'react';
import {View, TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import EventCard from '../../components/EventCard';
import styles from './styles';

const Tickets = ({navigation, tickets}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Ticket Info')}>
        <Text>Ticket Info</Text>
      </TouchableOpacity>
    </>
  );
};

export default Tickets;
