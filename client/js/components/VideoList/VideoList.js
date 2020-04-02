import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';
import PropTypes from 'prop-types';

const VideoList = ({
  route,
  navigation,
  horizontal,
  offset,
  faveIds,
  videos,
  currentVideo,
}) => {
  let scroll;
  if (horizontal) {
    scroll = styles.scroll;
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={scroll}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={horizontal}
        contentOffset={{x: offset, y: 0}}>
        {route.name === 'Most Viewed' &&
          videos.map(item => (
            <VideoCard
              key={item.etag}
              route={route}
              navigation={navigation}
              id={item.items[0].id}
              faveIds={faveIds}
              video={item.items[0]}
            />
          ))}

        {route.name === 'Newest' &&
          videos.map(item => (
            <VideoCard
              key={item.etag}
              route={route}
              navigation={navigation}
              id={item.items[0].id}
              faveIds={faveIds}
              video={item.items[0]}
            />
          ))}

        {route.name === 'Faves' &&
          videos.map(
            item =>
              faveIds.includes(item.items[0].id) && (
                <VideoCard
                  key={item.etag}
                  route={route}
                  navigation={navigation}
                  id={item.items[0].id}
                  faveIds={faveIds}
                  video={item.items[0]}
                />
              ),
          )}

        {route.name === 'Explore' &&
          videos.map(item => (
            <VideoCard
              video={item.items[0]}
              key={item.etag}
              route={route}
              navigation={navigation}
              id={item.items[0].id}
              faveIds={faveIds}
            />
          ))}

        {route.name === 'Video' &&
          videos.map(
            item =>
              item.items[0].id !== currentVideo && (
                <VideoCard
                  video={item.items[0]}
                  key={item.etag}
                  route={route}
                  navigation={navigation}
                  id={item.items[0].id}
                  faveIds={faveIds}
                />
              ),
          )}
        {route.name === 'Theme' &&
          videos.map(item => (
            <VideoCard
              video={item.items[0]}
              key={item.etag}
              route={route}
              navigation={navigation}
              id={item.items[0].id}
              faveIds={faveIds}
            />
          ))}
      </ScrollView>
    </View>
  );
};
VideoList.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  horizontal: PropTypes.bool,
  offset: PropTypes.number,
  faveIds: PropTypes.array,
  videos: PropTypes.array,
  currentVideo: PropTypes.string,
};
export default VideoList;
