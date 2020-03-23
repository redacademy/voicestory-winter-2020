import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import VideoList from '../../components/VideoList';
import CustomText from '../../components/CustomText';
import FilterTabNav from '../../navigation/FilterTab';

const Videos = ({navigation, route}) => {
  return (
    <>
      <FilterTabNav />
      <VideoList route={route} navigation={navigation} />
    </>
  );
};

export default Videos;
