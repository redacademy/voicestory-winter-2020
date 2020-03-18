import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      data: {},
    };
  }

  componentDidMount() {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${this.props.item.id.videoId}&key=AIzaSyDHEf8wOydqsAsoTdjNDO5a4W_2Fm4Yzyg&part=snippet,contentDetails,statistics,status`,
    )
      .then(resp => resp.json())
      .then(data => this.setState({data, loading: false}))
      .catch(e => {
        this.setState({loading: false, error: true});
        throw new Error(e);
      });
  }

  render() {
    const {route, navigation, item} = this.props;
    const buttonStyle =
      route.name !== 'Explore' ? styles.largeButton : styles.smallButton;
    const cardStyle =
      route.name !== 'Explore' ? styles.largeCard : styles.smallCard;
    const playIcon = route.name !== 'Explore' ? styles.play : styles.centerPlay;

    return this.state.loading ? (
      <ActivityIndicator style={styles.loader} />
    ) : this.state.data.error ? (
      <View style={styles.errorContainer}>
        <Text>There was an error getting Videos</Text>
      </View>
    ) : (
      <TouchableHighlight
        style={buttonStyle}
        onPress={() => {
          // TODO - navigation to single video
          // navigation.navigate('Video');
        }}
        underlayColor={'transparent'}>
        <View style={cardStyle}>
          <Image
            source={{uri: item.snippet.thumbnails.high.url}}
            style={styles.image}
          />
          {route.name === 'Explore' && (
            <View
              style={playIcon}
              transform={[{translateX: '-50%'}, {translateY: '-50%'}]}>
              <Icon name="play" size={40} color="white" />
            </View>
          )}
          <View style={styles.info}>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>14</Text>
              <Text style={styles.min}>Mins</Text>
            </View>
            <View style={styles.titleContainer}>
              {route.name !== 'Explore' && (
                <View style={playIcon}>
                  <Icon name="play" size={50} color="white" />
                </View>
              )}
              <View>
                {route.name !== 'Explore' && (
                  <Text style={styles.speaker}>Birnie McIntosh</Text>
                )}
                <Text style={styles.title}>{item.snippet.title}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default VideoCard;
