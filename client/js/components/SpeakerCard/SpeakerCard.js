import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../CustomText/CustomText';

const SpeakerCard = ({navigation, speaker, style}) => {
  const speakerimg =
    speaker && speaker.profile_picture
      ? {uri: speaker.profile_picture}
      : {uri: 'https://placedog.net/500'};
  const speakerName =
    speaker && speaker.owner.name ? speaker.owner.name : 'Name';
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SpeakerProfile', {speaker: speaker})}
      style={[styles.button, style]}>
      <Image
        style={{height: '75%', width: '100%'}}
        resizeMode={'cover'}
        source={speakerimg}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Text style={styles.label}>{speakerName}</Text>
    </TouchableOpacity>
  );
};

export default SpeakerCard;
