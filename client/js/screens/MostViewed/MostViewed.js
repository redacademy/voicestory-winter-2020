import React from 'react';
import VideoList from '../../components/VideoList';
import {YoutubeDataContext} from '../../context/YoutubeData';
import Error from '../../components/Error';
import PropTypes from 'prop-types';

const MostViewed = ({route, navigation}) => {
  return (
    <YoutubeDataContext.Consumer>
      {value => {
        return value.mostViewed.length > 0 ? (
          <VideoList
            navigation={navigation}
            route={route}
            videos={value.mostViewed}
          />
        ) : (
          <Error name={'Most Viewed'} height={'100%'} />
        );
      }}
    </YoutubeDataContext.Consumer>
  );
};
MostViewed.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default MostViewed;
