import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';

const EventCard = ({
  title,
  location,
  address,
  time,
  date,
  eventthumbnail,
  ticketthumbnail,
  event,
  ownedTicket,
  navigation,
  route,
  theme,
}) => {
  const tealConditional =
    (theme && theme == 'Mental Health') || theme == 'Abuse' || theme == 'Growth'
      ? styles.blue
      : styles.red;
  console.log(theme);
  const eventimg =
    event && eventthumbnail
      ? {uri: eventthumbnail}
      : {uri: 'https://placedog.net/500'};
  const ticketimg =
    ownedTicket && ticketthumbnail
      ? {uri: ticketthumbnail}
      : {uri: 'https://placedog.net/500'};
  return (
    <TouchableOpacity
      onPress={() =>
        route.name === 'Events'
          ? navigation.navigate('Event Info', {event: event})
          : navigation.navigate('Ticket Info', {ownedTicket: ownedTicket})
      }
      style={styles.card}>
      <View style={styles.contentbox}>
        <View style={styles.datebox}>
          <Text
            style={[
              styles.day,
              styles.bold,
              (theme && theme == 'Mental Health') ||
              theme == 'Abuse' ||
              theme == 'Growth'
                ? styles.bluetext
                : styles.redtext,
            ]}>
            {moment(date).format('DD')}
          </Text>
          <Text style={styles.month}>{moment(date).format('MMM')}</Text>
        </View>
        <View
          style={[
            styles.info,
            tealConditional,
            // (theme && theme == 'Love & Relationships') ||
            // theme == 'Trauma' ||
            // theme == 'Pain'
            //   ? styles.red
            //   : styles.blue,
          ]}>
          <View style={styles.details}>
            <Text style={[styles.bigText, styles.bold]}>{title}</Text>
            <Text style={styles.text}>{time}</Text>
          </View>
          <View style={styles.details}>
            <Text style={[styles.bigText, styles.bold]}>{location}</Text>
            <Text style={styles.text}>{address}</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={route.name === 'Events' ? eventimg : ticketimg}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
