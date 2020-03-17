import React from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from './styles';
import VideoList from '../../components/VideoList';

const Explore = ({navigation, route}) => {
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Videos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <VideoList horizontal={true} route={route} />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Themes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Speakers</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Speakers')}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Explore;
