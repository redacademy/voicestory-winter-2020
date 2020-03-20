import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../CustomText/CustomText';

const SpeakerCard = ({speaker, style, navigation}) => {
  const speakerProfilePic =
    speaker && speaker.profile_picture
      ? {uri: speaker.profile_picture}
      : {uri: 'https://placedog.net/500'};
  const speakerName =
    speaker && speaker.owner.name ? speaker.owner.name : 'Name';
  console.log(speaker);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SpeakerProfile', {speaker: speaker})}
      style={[styles.button, style]}>
      <Image
        style={{height: '75%', width: '100%'}}
        resizeMode={'cover'}
        source={speakerProfilePic}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
      />
      <Text style={styles.label}>{speakerName}</Text>
    </TouchableOpacity>
  );
};

export default SpeakerCard;
