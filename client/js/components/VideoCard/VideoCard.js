import React, {Component} from 'react';
import {View, TouchableHighlight, Image, ActivityIndicator} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../CustomText';
import {key} from '../../apiKeys';

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
      `https://www.googleapis.com/youtube/v3/videos?id=${this.props.item.id.videoId}&key=${key}&part=snippet,contentDetails,statistics`,
    )
      .then(resp => resp.json())
      .then(data => this.setState({data, loading: false}))
      .catch(e => {
        this.setState({loading: false, error: true});
        throw new Error(e);
      });
  }

  parseSpeakerName = item => {
    const indexCheck = item.snippet.title.indexOf('|');
    if (indexCheck !== -1) {
      const first = item.snippet.title.slice(indexCheck + 1);
      const second = first.slice(1, first.indexOf('|') - 1);
      return second;
    }
  };
  parseTitle = item => {
    return item.snippet.title.slice(0, item.snippet.title.indexOf('|') - 1);
  };

  render() {
    const {route, navigation, item} = this.props;
    const buttonStyle =
      route.name === 'Videos' ? styles.largeButton : styles.smallButton;
    const cardStyle =
      route.name === 'Videos' ? styles.largeCard : styles.smallCard;
    const playIcon = route.name === 'Videos' ? styles.play : styles.centerPlay;

    return this.state.loading ? (
      <ActivityIndicator style={styles.loader} />
    ) : this.state.data.error ? (
      <View style={styles.errorContainer}>
        <CustomText>There was an error getting Videos</CustomText>
      </View>
    ) : (
      <TouchableHighlight
        style={buttonStyle}
        onPress={() => {
          navigation.navigate('Video', {item: this.state.data});
        }}
        underlayColor={'transparent'}>
        <View style={cardStyle}>
          <Image
            source={{uri: item.snippet.thumbnails.high.url}}
            style={styles.image}
          />
          {route.name !== 'Videos' && (
            <View
              style={playIcon}
              transform={[{translateX: '-50%'}, {translateY: '-50%'}]}>
              <Icon name="play" size={40} color="white" />
            </View>
          )}
          <View style={styles.info}>
            <View style={styles.timeContainer}>
              <CustomText style={styles.time}>
                {this.state.data.items[0].contentDetails.duration.slice(2, 4)}
              </CustomText>
              <CustomText style={styles.min}>Mins</CustomText>
            </View>
            <View style={styles.titleContainer}>
              {route.name === 'Videos' && (
                <View style={playIcon}>
                  <Icon name="play" size={50} color="white" />
                </View>
              )}
              <View>
                {route.name === 'Videos' && (
                  <CustomText style={styles.speaker}>
                    {this.parseSpeakerName(item)}
                  </CustomText>
                )}
                <CustomText style={styles.title}>
                  {this.parseTitle(item)}
                </CustomText>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default VideoCard;
