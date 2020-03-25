import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';

const VideoList = ({
  route,
  navigation,
  horizontal,
  offset,
  faveIds,
  videos,
  currentVideo,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={horizontal} contentOffset={{x: offset, y: 0}}>
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
      </ScrollView>
    </View>
  );
};

export default VideoList;
