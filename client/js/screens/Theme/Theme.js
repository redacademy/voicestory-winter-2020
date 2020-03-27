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
  const currentPlaylistCheck = playlists.items.find(playlist =>
    playlist.snippet.title.includes(theme),
  );

  let currentPlaylist;
  if (currentPlaylistCheck !== undefined) {
    currentPlaylist = playlistVideos.find(
      playlist => playlist.id === currentPlaylistCheck.id,
    );
  }

  const currentVideos = [];
  if (currentPlaylist !== undefined) {
    currentPlaylist.data.items.forEach(playlistVideo => {
      const filteredVideo = videos.filter(
        video => playlistVideo.contentDetails.videoId === video.items[0].id,
      );
      return (
        filteredVideo[0] !== undefined && currentVideos.push(filteredVideo[0])
      );
    });
  }

  return currentVideos.length > 0 ? (
    <VideoList videos={currentVideos} route={route} navigation={navigation} />
  ) : (
    <View style={styles.error}>
      <CustomText>There was an error getting this playlist</CustomText>
    </View>
  );
};
