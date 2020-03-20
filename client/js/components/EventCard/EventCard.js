import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

const EventCard = ({event, navigation}) => {
  const eventimg =
    event && event.thumbnail_url
      ? {uri: event.thumbnail_url}
      : {uri: 'https://placedog.net/500'};
  return (
    <TouchableOpacity
      onPress={() => navigation.push('EventInfo', {event: event})}
      style={styles.card}>
      <View style={styles.contentbox}>
        <View style={styles.datebox}>
          <Text style={[styles.dateNum, styles.bold]}>17</Text>
          <Text style={styles.dateText}>MAR</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.details}>
            <Text style={[styles.bigText, styles.bold]}>{event.title}</Text>
            <Text style={styles.text}>{event.time}</Text>
          </View>
          <View style={styles.details}>
            <Text style={[styles.bigText, styles.bold]}>
              {event.location_name}
            </Text>
            <Text style={styles.text}>{event.location_address}</Text>
          </View>
        </View>
        <Image style={styles.image} source={eventimg} />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
