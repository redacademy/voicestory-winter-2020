import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const VideoCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Text>THis is the image</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>14</Text>
          <Text style={styles.min}>Mins</Text>
        </View>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.speaker}>Birnie McIntosh</Text>
            <Text style={styles.title}>
              Finding myself alone with my da thoughts created a fear anbd kid
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoCard;
