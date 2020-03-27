import React from 'react';
import VideoList from '../../components/VideoList';
import {YoutubeDataContext} from '../../context/YoutubeData';
const Faves = ({route, navigation, faveIds}) => {
  return (
    <YoutubeDataContext.Consumer>
      {value => (
        <VideoList
          route={route}
          navigation={navigation}
          faveIds={faveIds}
          videos={value.videos}
        />
      )}
    </YoutubeDataContext.Consumer>
  );
};

export default Faves;
