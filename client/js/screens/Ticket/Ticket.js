import React from 'react';
import {TouchableOpacity, View, SafeAreaView, Image} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Ticket = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.headerContainer}>
        <Text style={styles.header}>Ticket</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon style={styles.close} name="close" size={25} color="#FBF7EF" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.ticket}>
        <View style={styles.qrcodeContainer}>
          <Image
            style={styles.qrcode}
            source={require('../../assets/images/qr-code.png')}
          />
        </View>
        <View style={styles.ticketInfo}>
          <Text style={styles.title}>VoiceStory Live</Text>
          <Text style={styles.title}>Addicted to Pain</Text>
          <Text style={styles.date}>Tues, Mar 17, 2020</Text>
          <Text style={styles.time}>7:00 PM - 9:00 PM</Text>
        </View>
      </View>
    </>
  );
};

export default Ticket;
