import React from 'react';
import VideoList from '../../components/VideoList';
const Faves = ({route, navigation, faveIds}) => {
  return <VideoList route={route} navigation={navigation} faveIds={faveIds} />;
};

export default Faves;
