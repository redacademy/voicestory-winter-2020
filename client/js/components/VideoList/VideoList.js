import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';
const VideoList = ({horizontal, route}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={horizontal}>
        <VideoCard route={route} />
        <VideoCard route={route} />
        <VideoCard route={route} />
        <VideoCard route={route} />
        <VideoCard route={route} />
        <VideoCard route={route} />
      </ScrollView>
    </View>
  );
};

export default VideoList;
