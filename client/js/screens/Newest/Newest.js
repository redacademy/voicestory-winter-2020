import React from 'react';
import VideoList from '../../components/VideoList';
import {YoutubeDataContext} from '../../context/YoutubeData';

const Newest = ({route, navigation}) => {
  return (
    <YoutubeDataContext.Consumer>
      {value => (
        <VideoList
          navigation={navigation}
          route={route}
          videos={value.videos}
        />
      )}
    </YoutubeDataContext.Consumer>
  );
};

export default Newest;
