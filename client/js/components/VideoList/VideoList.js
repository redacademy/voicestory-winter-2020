import React, {Component} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';
import CustomText from '../CustomText';
import {key} from '../../apiKeys';
class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      error: false,
    };
  }

  // Only grabs 1 most recent videos
  // TODO - for production, request 20 or so videos from API, not only 1
  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=UCNaiQ7SzX7OQGxi2Kcho_aQ&part=snippet,id&order=date&maxResults=1`,
    )
      .then(resp => resp.json())
      .then(data => this.setState({data, loading: false}))
      .catch(e => {
        this.setState({loading: false, error: true});
        throw new Error(e);
      });
  }

  render() {
    const {route, navigation, horizontal, offset} = this.props;
    return this.state.loading ? (
      <ActivityIndicator />
    ) : this.state.data.error ? (
      <View style={styles.errorContainer}>
        <CustomText>There was an error getting Videos</CustomText>
      </View>
    ) : (
      <View style={styles.container}>
        <ScrollView horizontal={horizontal} offset={offset}>
          {this.state.data.items.map(item => (
            <VideoCard
              key={item.etag}
              route={route}
              navigation={navigation}
              item={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default VideoList;
