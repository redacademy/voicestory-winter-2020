import React from 'react';
import {TouchableOpacity, View, Image, ScrollView, Share} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../components/CustomText';
import SpeakerCard from '../../components/SpeakerCard';
import VideoList from '../../components/VideoList';

const Video = ({route, navigation}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        // TODO - change URL to videoId pulled from Youtube API
        url: 'https://www.youtube.com/voiceStory',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <TouchableOpacity
          onPress={() => {
            // TODO - open video player with youtube video data
            navigation.navigate('Now Playing');
          }}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/audiencemember.jpg')}
            />
          </View>
          <View style={styles.play}>
            <Icon name="play" size={55} color="rgb(255,255,255)" />
          </View>
        </TouchableOpacity>
        <View style={styles.info}>
          <CustomText style={styles.title}>This is the title</CustomText>
          <View style={styles.videoActions}>
            <CustomText style={styles.videoLength}>18:30</CustomText>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => {}}>
              {/* TODO - add logic to check if video is faved  */}
              <Icon
                style={styles.icon}
                name="heart-outline"
                size={18}
                color="#db4f48"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="download-outline"
                size={18}
                color="#2f9e99"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare}>
              <Icon
                style={styles.icon}
                name="share-variant"
                size={18}
                color="#507ea2"
              />
            </TouchableOpacity>
          </View>
          <CustomText style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </CustomText>
        </View>
      </View>
      <View style={styles.externalLinks}>
        <View style={styles.speakerContainer}>
          <CustomText style={styles.title}>About The Speaker</CustomText>
          <View style={styles.speakerCardContainer}>
            <SpeakerCard
              style={styles.speakerCard}
              name="Ivan Dai"
              source={require('../../assets/images/winstonatstage.jpg')}
              route={route}
            />
          </View>
          <CustomText style={styles.title}>Watch Next</CustomText>
        </View>
        <VideoList
          route={route}
          navigation={navigation}
          horizontal={true}
          offset={-20}
        />
      </View>
    </ScrollView>
  );
};

export default Video;
