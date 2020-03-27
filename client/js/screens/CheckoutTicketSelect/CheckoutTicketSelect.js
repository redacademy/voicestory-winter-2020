import React from 'react';
import {TouchableOpacity, View, ScrollView, Image, Picker} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import moment from 'moment';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';

const CheckoutTicketSelect = (props, {event, navigation}) => {
  console.log(props);
  // console.log(event);
  return (
    <View style={styles.container}>
      <View style={styles.ticketinfo}>
        <View>
          <Image
            style={styles.icon}
            source={require('../../assets/icons/calender.png')}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.date}>
            {/* {moment(ticket.date).format('MMM Do YYYY')} */}
            date
          </Text>
          <Text style={styles.time}>time</Text>
        </View>
      </View>
      <View style={styles.price}>
        <View style={styles.section}>
          <Text style={styles.heading}> x Early Bird Ticket</Text>
          <Dropdown style={styles.dropdown} />
          <Text style={styles.text}>$</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Subtotal</Text>
          <Text style={styles.text}>$</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Service Charge</Text>
          <Text style={styles.text}>$</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Total</Text>
          <Text style={styles.text}>$</Text>
        </View>
        <Button
          style={styles.button}
          bgcolor="#D84F48"
          label="Continue"
          onPress={() => navigation.navigate('Checkout', {screen: 'Payment'})}
        />
      </View>
    </View>
  );
};

export default CheckoutTicketSelect;
