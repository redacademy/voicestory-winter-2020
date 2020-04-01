import React, {Component} from 'react';
import {View, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../CustomText';
import PropTypes from 'prop-types';

class VideoCard extends Component {
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
    const {route, navigation, faveIds, id, video} = this.props;
    const buttonStyle =
      route.name === 'Newest' ||
      route.name === 'Theme' ||
      route.name === 'Most Viewed' ||
      route.name === 'Faves'
        ? styles.largeButton
        : styles.smallButton;
    const cardStyle =
      route.name === 'Newest' ||
      route.name === 'Theme' ||
      route.name === 'Most Viewed' ||
      route.name === 'Faves'
        ? styles.largeCard
        : styles.smallCard;
    const playIcon =
      route.name === 'Newest' ||
      route.name === 'Theme' ||
      route.name === 'Most Viewed' ||
      route.name === 'Faves'
        ? styles.play
        : styles.centerPlay;
    return route.name === 'Faves' ? (
      faveIds.includes(id) && (
        <View style={styles.cardContainer}>
          <TouchableHighlight
            style={buttonStyle}
            onPress={() => {
              navigation.navigate('Video', {video: video});
            }}
            underlayColor={'transparent'}>
            <View style={cardStyle}>
              <Image
                source={{
                  uri: video.snippet.thumbnails.high.url,
                }}
                style={styles.image}
              />
              {(route.name === 'Explore' || route.name === 'Video') && (
                <View
                  style={playIcon}
                  transform={[{translateX: '-50%'}, {translateY: '-50%'}]}>
                  <Icon name="play" size={40} color="white" />
                </View>
              )}
              <View style={styles.info}>
                <View style={styles.timeContainer}>
                  <CustomText style={styles.time}>
                    {video.contentDetails.duration.slice(2, 4)}
                  </CustomText>
                  <CustomText style={styles.min}>Mins</CustomText>
                </View>
                <View style={styles.titleContainer}>
                  {(route.name === 'Newest' ||
                    route.name === 'Theme' ||
                    route.name === 'Most Viewed' ||
                    route.name === 'Faves') && (
                    <View style={playIcon}>
                      <Icon name="play" size={50} color="white" />
                    </View>
                  )}
                  <View>
                    {(route.name === 'Newest' ||
                      route.name === 'Theme' ||
                      route.name === 'Most Viewed' ||
                      route.name === 'Faves') && (
                      <CustomText style={styles.speaker}>
                        {this.parseSpeakerName(video)}
                      </CustomText>
                    )}
                    <CustomText style={styles.title}>
                      {this.parseTitle(video)}
                    </CustomText>
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      )
    ) : (
      <View style={styles.cardContainer}>
        <TouchableHighlight
          style={buttonStyle}
          onPress={() => {
            navigation.navigate('Video', {video: video});
          }}
          underlayColor={'transparent'}>
          <View style={cardStyle}>
            <Image
              source={{uri: video.snippet.thumbnails.high.url}}
              style={styles.image}
            />
            {(route.name === 'Explore' || route.name === 'Video') && (
              <View
                style={playIcon}
                transform={[{translateX: '-50%'}, {translateY: '-50%'}]}>
                <Icon name="play" size={40} color="white" />
              </View>
            )}
            <View style={styles.info}>
              <View style={styles.timeContainer}>
                <Image
                  style={styles.redbg}
                  source={require('../../assets/icons/redbg.png')}
                />
                <CustomText style={styles.time}>
                  {video.contentDetails.duration.slice(2, 4)}
                </CustomText>
                <CustomText style={styles.min}>Mins</CustomText>
              </View>
              <View style={styles.titleContainer}>
                {(route.name === 'Newest' ||
                  route.name === 'Theme' ||
                  route.name === 'Most Viewed' ||
                  route.name === 'Faves') && (
                  <View style={playIcon}>
                    <Icon name="play" size={50} color="white" />
                  </View>
                )}
                <View>
                  {(route.name === 'Newest' ||
                    route.name === 'Theme' ||
                    route.name === 'Most Viewed' ||
                    route.name === 'Faves') && (
                    <CustomText style={styles.speaker}>
                      {this.parseSpeakerName(video)}
                    </CustomText>
                  )}
                  <CustomText style={styles.title}>
                    {this.parseTitle(video)}
                  </CustomText>
                </View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
VideoCard.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
  id: PropTypes.string,
  video: PropTypes.object,
};
export default VideoCard;
