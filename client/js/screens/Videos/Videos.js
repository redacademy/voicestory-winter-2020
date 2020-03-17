import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import VideoList from '../../components/VideoList';

const Videos = ({navigation, route}) => {
  return (
    <>
      <View style={styles.filterContainer}>
        <TouchableOpacity>
          <Text>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Most Viewed</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
          <Text>Theme</Text>
        </TouchableOpacity>
      </View>
      <VideoList route={route} navigation={navigation} />
    </>
  );
};

export default Videos;
