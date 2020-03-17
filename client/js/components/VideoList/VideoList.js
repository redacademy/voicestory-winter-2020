import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';
const VideoList = ({horizontal, route, navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={horizontal}>
        <VideoCard route={route} navigation={navigation} />
        <VideoCard route={route} navigation={navigation} />
        <VideoCard route={route} navigation={navigation} />
        <VideoCard route={route} navigation={navigation} />
        <VideoCard route={route} navigation={navigation} />
        <VideoCard route={route} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default VideoList;
