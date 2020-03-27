import React from 'react';
import VideoList from '../../components/VideoList';
import {YoutubeDataContext} from '../../context/YoutubeData';
import Error from '../../components/Error';
const Newest = ({route, navigation}) => {
  return (
    <YoutubeDataContext.Consumer>
      {value => {
        return value.videos.length > 0 ? (
          <VideoList
            navigation={navigation}
            route={route}
            videos={value.videos}
          />
        ) : (
          <Error name={'Newest videos'} height={'100%'} />
        );
      }}
    </YoutubeDataContext.Consumer>
  );
};

export default Newest;
