import React from 'react';
import {Text} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const CustomText = props => {
  return (
    <Text style={[styles.defaultFont, props.style]}>{props.children}</Text>
  );
};

CustomText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default CustomText;
