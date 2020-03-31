import React, {useReducer, useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import Button from '../../components/Button/';
import styles from './styles';
import SpeakerCard from '../../components/SpeakerCard';
import {ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import {mapKey} from '../../apiKeys';
import openMap from 'react-native-open-maps';

const TicketInfo = ({ticket, route, navigation}) => {
  console.log(ticket);
  const getMap = async address => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${mapKey}`,
    )
      .then(resp => resp.json())
      .then(data => {
        openMap({
          latitude: data.results[0].geometry.location.lat,
          longitude: data.results[0].geometry.location.lng,
          query: data.results[0].formatted_address,
        });
      })
      .catch(e => {
        throw new Error(e);
      });
  };
  return (
    <>
      <ScrollView style={styles.ticket}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{uri: ticket.thumbnail_url}}
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
              <Text style={styles.day}>{moment(ticket.date).format('DD')}</Text>
            </View>
            <View style={styles.info}>
              <Text style={[styles.date, styles.bold]}>
                {moment(ticket.date).format('ddd, MMM DD YYYY')}
              </Text>
              <Text style={styles.time}>{ticket.time}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              getMap(ticket.location_address);
            }}
            style={styles.infoSections}>
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
          </TouchableOpacity>
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
              {ticket.speakers.map(speaker => (
                <SpeakerCard
                  style={styles.speakerCard}
                  speaker={speaker}
                  key={speaker.id}
                  navigation={navigation}
                  route={route}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TicketInfo;
