import React, {useReducer, useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import Button from '../../components/Button/';
import styles from './styles';
import SpeakerCard from '../../components/SpeakerCard';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';

const TicketInfo = ({ticket, navigation}) => {
  console.log(ticket);
  return (
    <>
      <ScrollView style={styles.ticket}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={require('../../assets/images/winstonatstage.jpg')}
          />
        </View>
        <Text style={styles.title}>Voice Story Live</Text>
        <Text style={styles.eventtitle}>{ticket.title}</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            bgcolor="#D84F48"
            label="View Ticket"
            onPress={() => navigation.navigate('Ticket', {ticket: ticket})}
          />
        </View>
        <View style={styles.ticketInfoContainer}>
          <View style={styles.infoSections}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/calender.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.date}>
                {moment(ticket.date).format('MMM Do YYYY')}
              </Text>
              <Text style={styles.time}>{ticket.time}</Text>
            </View>
          </View>
          <View style={styles.infoSections}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/location.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.location}>{ticket.location_name}</Text>
              <Text style={styles.address}>{ticket.location_address}</Text>
            </View>
          </View>
          <View style={styles.infoSections}>
            <View>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/pricing.png')}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.price}>${ticket.price}</Text>
              <Text style={styles.tax}>Not including taxes</Text>
            </View>
          </View>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.about}>{ticket.description}</Text>
          <View style={styles.speakerContainer}>
            <Text style={styles.speakerTitle}>Speakers</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <SpeakerCard
                style={styles.speakerCard}
                name="Alexandria Papodopoulos"
                source={require('../../assets/images/winstonatstage.jpg')}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TicketInfo;
