import React from 'react';
import {View} from 'react-native';
import EventCard from '../../components/EventCard';
import styles from './styles';
import PropTypes from 'prop-types';

const Events = ({events, route, navigation}) => {
  return (
    <View style={styles.events}>
      {events &&
        events.map(event => (
          <EventCard
            key={event.id}
            event={event}
            title={event.title}
            location={event.location_name}
            address={event.location_address}
            time={event.time}
            date={event.date}
            eventthumbnail={event.thumbnail_url}
            route={route}
            navigation={navigation}
            theme={event.theme}
          />
        ))}
    </View>
  );
};

Events.propType = {
  events: PropTypes.object,
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default Events;
