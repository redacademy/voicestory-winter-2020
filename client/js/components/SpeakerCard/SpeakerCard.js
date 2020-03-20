import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../CustomText/CustomText';

const SpeakerCard = ({speaker, style}) => {
  const speakerimg =
    speaker && speaker.profile_picture
      ? {uri: speaker.profile_picture}
      : {uri: 'https://placedog.net/500'};
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Image
        style={{height: '75%', width: '100%'}}
        resizeMode={'cover'}
        source={speakerimg}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Text style={styles.label}>{speaker.owner.name}</Text>
    </TouchableOpacity>
  );
};

export default SpeakerCard;
