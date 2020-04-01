import React from 'react';
import {TouchableOpacity, View, PointPropType} from 'react-native';
import styles from './styles';
import ThemesButton from '../../components/ThemesButton';
import {ScrollView} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import VideoList from '../../components/VideoList';
import SpeakerCard from '../../components/SpeakerCard';
import {YoutubeDataContext} from '../../context/YoutubeData';
import Error from '../../components/Error/';
import PropTypes from 'prop-types';

const Explore = ({navigation, route, speakers}) => {
  return (
    <YoutubeDataContext.Consumer>
      {value => (
        <View style={styles.exploreContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Videos</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Videos', {screen: 'Newest'});
              }}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          {value.videos.length > 0 ? (
            <VideoList
              horizontal={true}
              route={route}
              navigation={navigation}
              offset={-25}
              videos={value.videos}
            />
          ) : (
            <Error name={'videos'} />
          )}

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Themes</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Videos', {screen: 'Themes'})}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.themeContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Vulnerability'});
                }}
                theme="Vulnerability"
                style={styles.themeButton}
                source={require('../../assets/icons/vulnerability.png')}
                iconDimension={40}
              />
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Family'});
                }}
                theme="Love & Relationships"
                style={styles.themeButton}
                source={require('../../assets/icons/heart.png')}
                iconDimension={40}
              />
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Trauma'});
                }}
                theme="Trauma"
                style={styles.themeButton}
                source={require('../../assets/icons/trauma.png')}
                iconDimension={40}
              />
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Mental Health'});
                }}
                theme="Mental Health"
                style={styles.themeButton}
                source={require('../../assets/icons/mentalhealth.png')}
                iconDimension={40}
              />
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Abuse'});
                }}
                theme="Abuse"
                style={styles.themeButton}
                source={require('../../assets/icons/abuse.png')}
                iconDimension={40}
              />
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Miscellaneous'});
                }}
                theme="Miscellaneous"
                style={styles.themeButton}
                source={require('../../assets/icons/misc.png')}
                iconDimension={40}
              />
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Pain'});
                }}
                theme="Pain"
                style={styles.themeButton}
                source={require('../../assets/icons/pain.png')}
                iconDimension={40}
              />
              <ThemesButton
                func={() => {
                  navigation.navigate('Theme', {theme: 'Growth'});
                }}
                theme="Growth"
                style={styles.themeButton}
                source={require('../../assets/icons/growth.png')}
                iconDimension={40}
              />
            </ScrollView>
          </View>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Speakers</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Speakers')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.speakerContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {speakers?.map(speaker => (
                <SpeakerCard
                  style={styles.speakerCard}
                  speaker={speaker}
                  key={speaker.id}
                  navigation={navigation}
                  route={route}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </YoutubeDataContext.Consumer>
  );
};

Explore.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  speakers: PropTypes.array,
};
export default Explore;
