import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VideoCard = ({route, navigation, item}) => {
  const buttonStyle =
    route.name !== 'Explore' ? styles.largeButton : styles.smallButton;
  const cardStyle =
    route.name !== 'Explore' ? styles.largeCard : styles.smallCard;
  const playIcon = route.name !== 'Explore' ? styles.play : styles.centerPlay;
  return (
    <TouchableHighlight
      style={buttonStyle}
      onPress={() => {
        // navigation.navigate('Video');
      }}
      underlayColor={'transparent'}>
      <View style={cardStyle}>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
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
              <Text style={styles.title}>
                Finding myself alone with my da thoughts created a fear anbd kid
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default VideoCard;
