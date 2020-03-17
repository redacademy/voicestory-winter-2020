import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';
const VideoList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </ScrollView>
    </View>
  );
};

export default VideoList;
