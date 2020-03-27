import React from 'react';
import CustomText from '../CustomText';
import {View} from 'react-native';
import styles from './styles';
const Error = ({name, height}) => (
  <View style={[styles.error, {height: height}]}>
    <CustomText>There was an error getting {name}</CustomText>
  </View>
);

export default Error;
