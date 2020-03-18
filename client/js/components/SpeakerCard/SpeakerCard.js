import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../CustomText/CustomText';

const SpeakerCard = ({name, style, source}) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Image
        style={{height: '75%', width: '100%'}}
        resizeMode={'cover'}
        source={source}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Text style={styles.label}>{name}</Text>
    </TouchableOpacity>
  );
};

export default SpeakerCard;
