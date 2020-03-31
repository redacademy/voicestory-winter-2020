import React from 'react';
import CustomText from '../CustomText';
import {View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Error = ({name, height}) => (
  <View style={[styles.error, {height: height}]}>
    <CustomText>There was an error getting {name}</CustomText>
  </View>
);

Error.propTypes = {
  name: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Error;
