import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export default CustomText = props => {
  return (
    <Text style={[styles.defaultFont, props.style]}>{props.children}</Text>
  );
};
