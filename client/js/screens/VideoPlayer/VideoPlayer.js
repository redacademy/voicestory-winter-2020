import React from 'react';
import {View, TouchableOpacity, Share, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';
import CustomText from '../../components/CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoPlayer = ({navigation}) => {
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

  const displaySpinner = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <WebView
          // TODO - videoId should be endpoint
          source={{uri: `https://www.youtube.com/embed/${'Kacy7rAa3qw'}`}}
          startInLoadingState={true}
          renderLoading={displaySpinner}
        />
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <CustomText style={styles.title}>This is the title</CustomText>
          </View>
          <View style={styles.actionContainer}>
            <TouchableOpacity onPress={() => {}}>
              {/* TODO - add logic to check if video is faved  */}
              <Icon
                style={styles.icon}
                name="heart-outline"
                size={24}
                color="#db4f48"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Icon
                style={styles.icon}
                name="download-outline"
                size={24}
                color="#2f9e99"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare}>
              <Icon
                style={styles.icon}
                name="share-variant"
                size={24}
                color="#507ea2"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VideoPlayer;
