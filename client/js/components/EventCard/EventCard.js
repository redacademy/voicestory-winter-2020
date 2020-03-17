import React from 'react';
import styles from './styles';
import {View, Image, Text} from 'react-native';

const EventCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.date}>Date</Text>
        <View style={styles.content}>
          <Text>Content</Text>
        </View>
        <Image
          style={styles.image}
          source={{uri: 'https://placedog.net/500'}}
        />
      </View>
    </View>
  );
};

export default EventCard;
