import React from 'react';
import {TouchableOpacity, View, ScrollView, Image} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import Dropdown from '../../components/Dropdown';
import moment from 'moment';

const Checkout = ({event, navigation}) => {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={require('../../assets/images/winstonatstage.jpg')}
        />
      </View>
      <Text style={styles.title}>{event.title}</Text>

      <View style={styles.container}>
        <Text>Select your ticket(s)</Text>
        <View style={styles.ticketinfo}>
          <View>
            <Image
              style={styles.icon}
              source={require('../../assets/icons/calender.png')}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.date}>
              {moment(event.date).format('MMM Do YYYY')}
            </Text>
            <Text style={styles.time}>{event.time}</Text>
          </View>
        </View>
        <View style={styles.price}>
          <View style={styles.section}>
            <Text style={styles.heading}> x Early Bird Ticket</Text>
            <Dropdown style={styles.dropdown} />
            <Text style={styles.text}>${event.price}</Text>
          </View>
          <View>
            <Text>Payment</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Subtotal</Text>
            <Text style={styles.text}>${event.price}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Service Charge</Text>
            <Text style={styles.text}>$0</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.heading}>Total</Text>
            <Text style={styles.text}>${event.price}</Text>
          </View>
          <Button
            style={styles.button}
            bgcolor="#D84F48"
            label="Continue"
            onPress={() => navigation.navigate('Checkout', {screen: 'Payment'})}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;
