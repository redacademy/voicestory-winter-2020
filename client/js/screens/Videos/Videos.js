import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import VideoList from '../../components/VideoList';
import CustomText from '../../components/CustomText';

const Videos = ({navigation, route}) => {
  return (
    <>
      <View style={styles.filterContainer}>
        <TouchableOpacity>
          <CustomText>Newest</CustomText>
        </TouchableOpacity>
        <TouchableOpacity>
          <CustomText>Most Viewed</CustomText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Video')}>
          <CustomText>Theme</CustomText>
        </TouchableOpacity>
      </View>
      <VideoList route={route} navigation={navigation} />
    </>
  );
};

export default Videos;
