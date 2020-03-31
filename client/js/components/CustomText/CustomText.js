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
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
};
export default CustomText;
