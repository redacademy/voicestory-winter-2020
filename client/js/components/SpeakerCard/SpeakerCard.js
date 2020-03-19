import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../CustomText/CustomText';

const SpeakerCard = ({name, style, source, route}) => {
  return route?.name === 'Video' ? (
    <TouchableOpacity style={[styles.button, style]}>
      <Image style={styles.videoRoute} resizeMode={'cover'} source={source} />
      <Text style={styles.videoLabel}>{name}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.button, style]}>
      <Image style={styles.otherRoute} resizeMode={'cover'} source={source} />
      <Text style={styles.label}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SpeakerCard;
