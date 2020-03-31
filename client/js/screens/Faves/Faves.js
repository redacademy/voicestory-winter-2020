import React from 'react';
import {View} from 'react-native';
import VideoList from '../../components/VideoList';
import {YoutubeDataContext} from '../../context/YoutubeData';
import styles from './styles';
const Faves = ({route, navigation, faveIds}) => {
  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default Faves;
