import React from 'react';
import VideoList from '../../components/VideoList';
import {YoutubeDataContext} from '../../context/YoutubeData';
import Error from '../../components/Error';
import PropTypes from 'prop-types';
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
Newest.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};
export default Newest;
