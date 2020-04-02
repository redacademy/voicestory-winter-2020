import React from 'react';
import {View, Image, Linking} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const SpeakerProfile = ({speaker}) => {
  _onMailto = email => {
    const address = email;
    this.launchURL(`mailto:${address}`);
  };

  launchURL = url => {
    Linking.openURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          Linking.openURL(url).catch(err => {
            console.warn('openURL error', err);
          });
        }
      })
      .catch(err => console.warn('An unexpected error happened', err));
  };

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
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(speaker.linkedin);
              }}>
              <Image
                style={[styles.icon, styles.linkedin]}
                source={require('../../assets/icons/linkedin1x.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconbox}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(`mailto:${speaker.owner.email}`);
              }}>
              <Image
                style={[styles.icon, styles.email]}
                source={require('../../assets/icons/email1x.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconbox}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(speaker.facebook);
              }}>
              <Image
                style={[styles.icon, styles.facebook]}
                source={require('../../assets/icons/facebook1x.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.biotext}>{speaker.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
SpeakerProfile.propTypes = {
  speaker: PropTypes.object.isRequired,
};
export default SpeakerProfile;
