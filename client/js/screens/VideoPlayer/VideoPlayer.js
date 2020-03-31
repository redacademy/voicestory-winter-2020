import React from 'react';
import {View, TouchableOpacity, Share, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';
import CustomText from '../../components/CustomText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoPlayer = ({item, addFave, removeFave, faveIds}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        url: `https://www.youtube.com/watch?v=${item.id}`,
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

  const parseSpeakerName = item => {
    const indexCheck = item.snippet.title.indexOf('|');
    if (indexCheck !== -1) {
      const first = item.snippet.title.slice(indexCheck + 1);
      const second = first.slice(1, first.indexOf('|') - 1);
      return second;
    }
  };
  const parseTitle = item => {
    return item.snippet.title.slice(0, item.snippet.title.indexOf('|') - 1);
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <WebView
            source={{uri: `https://www.youtube.com/embed/${item.id}`}}
            startInLoadingState={true}
            renderLoading={displaySpinner}
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <View style={styles.info}>
              <CustomText style={styles.speakerName}>
                {parseSpeakerName(item)}
              </CustomText>
              <CustomText style={styles.title}>{parseTitle(item)}</CustomText>
            </View>
            <View style={styles.actionContainer}>
              {faveIds.includes(item.id) ? (
                <TouchableOpacity
                  onPress={() => {
                    removeFave(item.id);
                  }}>
                  <Icon
                    style={styles.icon}
                    name="heart"
                    size={24}
                    color="#db4f48"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    addFave(item.id);
                  }}>
                  <Icon
                    style={styles.icon}
                    name="heart-outline"
                    size={24}
                    color="#db4f48"
                  />
                </TouchableOpacity>
              )}

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
    </View>
  );
};

export default VideoPlayer;
