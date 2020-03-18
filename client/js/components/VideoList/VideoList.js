import React, {Component} from 'react';
import {View, ScrollView, ActivityIndicator, Text} from 'react-native';
import styles from './styles';
import VideoCard from '../VideoCard';

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {},
      error: false,
    };
  }

  //Only grabs 20 most recent videos
  componentDidMount() {
    fetch(
      'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHEf8wOydqsAsoTdjNDO5a4W_2Fm4Yzyg&channelId=UCNaiQ7SzX7OQGxi2Kcho_aQ&part=snippet,id&order=date&maxResults=20',
    )
      .then(resp => resp.json())
      .then(data => this.setState({data, loading: false}))
      .catch(e => {
        this.setState({loading: false, error: true});
        throw new Error(e);
      });
  }

  render() {
    console.log(this.state.data);
    const {route, navigation, horizontal} = this.props;
    return this.state.loading ? (
      <ActivityIndicator />
    ) : this.state.data.error ? (
      <View style={styles.errorContainer}>
        <Text>There was an error getting Videos</Text>
      </View>
    ) : (
      <View style={styles.container}>
        <ScrollView horizontal={horizontal}>
          {this.state.data.items.map(item => {
            <VideoCard route={route} navigation={navigation} item={item} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default VideoList;
