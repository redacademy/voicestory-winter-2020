import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

const EventCard = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('EventInfo')}
      style={styles.card}>
      <View style={styles.contentbox}>
        <View style={styles.datebox}>
          <Text style={[styles.dateNum, styles.bold]}>17</Text>
          <Text style={styles.dateText}>MAR</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.details}>
            <Text style={[styles.bigText, styles.bold]}>Event Title</Text>
            <Text style={styles.text}>Event Time</Text>
          </View>
          <View style={styles.details}>
            <Text style={[styles.bigText, styles.bold]}>Location Name</Text>
            <Text style={styles.text}>Location Address</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={{uri: 'https://placedog.net/500'}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
