import React from 'react';
import {View} from 'react-native';
import VideoList from '../../components/VideoList';
import CustomText from '../../components/CustomText';
import styles from './styles';
export default Theme = ({
  theme,
  playlistVideos,
  playlists,
  videos,
  route,
  navigation,
}) => {
  const currentPlaylist = playlists.items.find(playlist =>
    playlist.snippet.title.includes(theme),
  );

  let currentPlaylistVideos;
  if (currentPlaylist !== undefined) {
    currentPlaylistVideos = playlistVideos.find(
      playlist => playlist.id === currentPlaylist.id,
    );
  }
  console.log(currentPlaylistVideos);
  return currentPlaylistVideos !== undefined ||
    currentPlaylistVideos !== undefined ? (
    <VideoList
      videos={videos}
      playlist={currentPlaylistVideos}
      route={route}
      navigation={navigation}
    />
  ) : (
    <View style={styles.error}>
      <CustomText>There was an error getting this playlist</CustomText>
    </View>
  );
};
