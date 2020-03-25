import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {BaseRouter} from '@react-navigation/native';

const EventCard = ({
  title,
  location,
  address,
  time,
  date,
  event,
  navigation,
  route,
}) => {
  const eventimg =
    event && event.thumbnail_url
      ? {uri: event.thumbnail_url}
      : {uri: 'https://placedog.net/500'};
  console.log(route);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push(
          route.name === 'Events' ? 'EventInfo' : 'My Tickets',
          route.name === 'Events'
            ? {
                event: event,
              }
            : {ticket: ticket},
        )
      }
      style={styles.card}>
      <View style={styles.contentbox}>
        <View style={styles.datebox}>
          <Text style={[styles.dateNum, styles.bold]}>17</Text>
          <Text style={styles.dateText}>MAR</Text>
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
        <Image style={styles.image} source={eventimg} />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
