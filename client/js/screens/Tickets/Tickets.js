import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import {View} from 'react-native';
import styles from './styles';
import EventCard from '../../components/EventCard';
import PropTypes from 'prop-types';

const Tickets = ({navigation, route, ticketOwner}) => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.main}>
        {ticketOwner.ownedTickets &&
          ticketOwner.ownedTickets.map(ownedTicket => (
            <EventCard
              style={styles.card}
              key={ownedTicket.id}
              title={ownedTicket.title}
              location={ownedTicket.location_name}
              address={ownedTicket.location_address}
              time={ownedTicket.time}
              date={ownedTicket.date}
              ticketthumbnail={ownedTicket.thumbnail_url}
              navigation={navigation}
              route={route}
              ownedTicket={ownedTicket}
              theme={ownedTicket.theme}
            />
          ))}
      </View>
    </ScrollView>
  );
};

Tickets.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.objectOf(PropTypes.func),
  ticketOwner: PropTypes.arrayOf(PropTypes.object),
};

export default Tickets;
