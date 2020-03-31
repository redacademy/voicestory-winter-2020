import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../CustomText/CustomText';
import PropTypes from 'prop-types';

const SpeakerCard = ({navigation, speaker, style, route}) => {
  const speakerimg =
    speaker && speaker.profile_picture
      ? {uri: speaker.profile_picture}
      : {uri: 'https://placedog.net/500'};
  const speakerName =
    speaker && speaker.owner.name ? speaker.owner.name : 'Name';

  return route?.name === 'Video' ? (
    <TouchableOpacity
      onPress={() => navigation.navigate('Speaker Profile', {speaker: speaker})}
      style={[styles.button, style]}>
      <Image
        style={styles.videoRoute}
        resizeMode={'cover'}
        source={speakerimg}
      />
      <Text style={styles.label}>{speakerName}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={() => navigation.navigate('Speaker Profile', {speaker: speaker})}
      style={[styles.button, style]}>
      <Image
        style={styles.otherRoute}
        resizeMode={'cover'}
        source={speakerimg}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{speakerName}</Text>
      </View>
    </TouchableOpacity>
  );
};
SpeakerCard.propTypes = {
  navigation: PropTypes.object,
  speaker: PropTypes.object,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  route: PropTypes.object,
};
export default SpeakerCard;
