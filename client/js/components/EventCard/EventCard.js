import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';

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
  console.log(theme);
  const tealCondition =
    (theme && theme == 'Mental Health') || theme == 'Abuse' || theme == 'Growth'
      ? styles.blue
      : styles.red;
  const tealTextCondition =
    (theme && theme == 'Mental Health') || theme == 'Abuse' || theme == 'Growth'
      ? styles.bluetext
      : styles.redtext;
  const blueCondition =
    (theme && theme == 'Vulnerability') || theme == 'Miscellneous'
      ? styles.teal
      : styles.red;
  const blueTextCondition =
    (theme && theme == 'Vulnurability') || theme == 'Miscellneous'
      ? styles.tealtext
      : styles.redtext;
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
          <Text style={[styles.day, styles.bold]}>
            {moment(date).format('DD')}
          </Text>
          <Text style={[styles.month, tealTextCondition, blueTextCondition]}>
            {moment(date).format('MMM')}
          </Text>
        </View>
        <View style={[styles.info, tealCondition, blueCondition]}>
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

EventCard.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  address: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.number,
  eventthumbnail: PropTypes.string,
  ticketthumbnail: PropTypes.string,
  event: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ownedTicket: PropTypes.object,
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default EventCard;
