import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import VideoList from '../../components/VideoList';
const Videos = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
        <Text>Theme</Text>
      </TouchableOpacity>

      <VideoList />
    </>
  );
};

export default Videos;
