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
}) => {
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
          ? navigation.navigate('Event Info', {event: event, title: title})
          : navigation.navigate('Ticket Info', {ownedTicket: ownedTicket})
      }
      style={styles.card}>
      <View style={styles.contentbox}>
        <View style={styles.datebox}>
          <Text style={[styles.dateNum, styles.bold]}>
            {moment(date).format('DD')}
          </Text>
          <Text style={styles.dateText}>{moment(date).format('MMM')}</Text>
        </View>
        <View style={styles.info}>
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
