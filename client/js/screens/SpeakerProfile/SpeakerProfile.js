import React from 'react';
import {View, Image} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import VideoList from '../../components/VideoList';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const SpeakerProfile = ({navigation, speaker}) => {
  const {route} = {navigation};
  const hero =
    speaker && speaker.profile_picture
      ? {uri: speaker.profile_picture}
      : {uri: 'https://placedog.net/500'};
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.banner} source={hero} />
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.bigtext}>{speaker.owner.name}</Text>
          <Text style={styles.lighttext}>{speaker.title}</Text>
        </View>
        <View style={styles.socials}>
          <View style={styles.iconbox}>
            <Image
              style={[styles.icon, styles.linkedin]}
              source={require('../../assets/icons/linkedin1x.png')}
            />
          </View>
          <View style={styles.iconbox}>
            <Image
              style={[styles.icon, styles.email]}
              source={require('../../assets/icons/email1x.png')}
            />
          </View>
          <View style={styles.iconbox}>
            <Image
              style={[styles.icon, styles.facebook]}
              source={require('../../assets/icons/facebook1x.png')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.about}>{speaker.description}</Text>
        </View>
      </View>
      <VideoList horizontal={true} route={route} navigation={navigation} />
    </ScrollView>
  );
};

export default SpeakerProfile;
