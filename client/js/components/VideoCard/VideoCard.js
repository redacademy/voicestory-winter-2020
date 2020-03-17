import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoCard = () => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => {}}
      underlayColor={'transparent'}>
      <View style={styles.card}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.image}
        />
        <View style={styles.info}>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>14</Text>
            <Text style={styles.min}>Mins</Text>
          </View>
          <View style={styles.titleContainer}>
            <View style={styles.play}>
              <Icon name="play" size={50} color="white" />
            </View>
            <View>
              <Text style={styles.speaker}>Birnie McIntosh</Text>
              <Text style={styles.title}>
                Finding myself alone with my da thoughts created a fear anbd kid
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default VideoCard;
