import React from 'react';
import VideoList from '../../components/VideoList';
const Newest = ({route, navigation}) => {
  return <VideoList navigation={navigation} route={route} />;
};

export default Newest;
