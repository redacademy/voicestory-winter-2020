import React from 'react';
import VideoList from '../../components/VideoList';
import {YoutubeDataContext} from '../../context/YoutubeData';
const MostViewed = ({route, navigation}) => {
  return (
    <YoutubeDataContext.Consumer>
      {value => (
        <VideoList
          navigation={navigation}
          route={route}
          videos={value.mostViewed}
        />
      )}
    </YoutubeDataContext.Consumer>
  );
};

export default MostViewed;
