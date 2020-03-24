import React from 'react';
import VideoList from '../../components/VideoList';
const MostViewed = ({route, navigation}) => {
  return <VideoList navigation={navigation} route={route} />;
};

export default MostViewed;
