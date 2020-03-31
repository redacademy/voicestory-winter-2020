import React from 'react';
import {View} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import PropTypes from 'prop-types';

const CheckoutConfirmation = ({event, navigation}) => {
  return (
    <>
      <View style={styles.main}>
        <Icon
          onPress={() => navigation.navigate('Explore')}
          style={styles.close}
          name="close"
          size={20}
          color="#2F9E99"
        />
        <View style={styles.content}>
          <Icon style={styles.heart} name="heart" size={75} color="#2F9E99" />
          <Text style={styles.thankyou}>Thank you!</Text>
          <Text style={styles.description}>
            You are going to "{event.title}" at the {event.location_name} on{' '}
            {moment(event.date).format('MMMM Do')}.
          </Text>
        </View>
        <Button
          onPress={() => navigation.navigate('Tickets')}
          style={styles.button}
          bgcolor="#DB4F48"
          label="View My Tickets"
        />
      </View>
    </>
  );
};

CheckoutConfirmation.propTypes = {
  event: PropTypes.object,
  navigation: PropTypes.object,
};

export default CheckoutConfirmation;
