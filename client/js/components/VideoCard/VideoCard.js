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
  // UNCOMMENT WHEN API KEY IS RENEWED
  // componentDidMount() {
  //   fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?id=${this.props.item.id.videoId}&key=${key}&part=snippet,contentDetails,statistics,status`,
  //   )
  //     .then(resp => resp.json())
  //     .then(data => this.setState({data, loading: false}))
  //     .catch(e => {
  //       this.setState({loading: false, error: true});
  //       throw new Error(e);
  //     });
  // }

  render() {
    const {route, navigation, item} = this.props;
    const buttonStyle =
      route.name === 'Videos' ? styles.largeButton : styles.smallButton;
    const cardStyle =
      route.name === 'Videos' ? styles.largeCard : styles.smallCard;
    const playIcon = route.name === 'Videos' ? styles.play : styles.centerPlay;

    // UNCOMMENT WHEN API KEY IS RENEWED
    // return this.state.loading ? (
    //   <ActivityIndicator style={styles.loader} />
    // ) : this.state.data.error ? (
    //   <View style={styles.errorContainer}>
    //     <CustomText>There was an error getting Videos</CustomText>
    //   </View>
    // ) : (
    return (
      <TouchableHighlight
        style={buttonStyle}
        onPress={() => {
          // TODO - navigation to single video
          navigation.navigate('Video');
        }}
        underlayColor={'transparent'}>
        <View style={cardStyle}>
          <Image
            // UNCOMMENT WHEN API KEY IS RENEWED
            // source={{uri: item.snippet.thumbnails.high.url}}
            source={require('../../assets/images/audiencemember.jpg')}
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
              <CustomText style={styles.time}>14</CustomText>
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
                    Birnie McIntosh
                  </CustomText>
                )}
                <CustomText style={styles.title}>
                  {/*  UNCOMMENT WHEN API KEY IS RENEWED */}
                  {/* {item.snippet.title} */}
                  This is the title
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
