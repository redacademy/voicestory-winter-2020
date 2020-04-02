import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import {View} from 'react-native';
import styles from './styles';
import EventCard from '../../components/EventCard';

const Tickets = ({navigation, route, ticketOwner}) => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.main}>
        {ticketOwner[0].ownedTickets &&
          ticketOwner[0].ownedTickets.map(ownedTicket => (
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

export default Tickets;
