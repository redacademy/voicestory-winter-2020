import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';
import PropTypes from 'prop-types';

const ThemesButton = ({theme, style, source, iconDimension, func}) => {
  return (
    <TouchableOpacity onPress={func} style={[styles.button, style]}>
      <Image
        style={{transform: [{translateY: 10}]}}
        resizeMode={'contain'}
        height={iconDimension}
        width={iconDimension}
        source={source}
      />
      <Text style={styles.label}>{theme}</Text>
    </TouchableOpacity>
  );
};

ThemesButton.propTypes = {
  theme: PropTypes.string,
  styles: PropTypes.object,
  source: PropTypes.number,
  iconDimension: PropTypes.number,
  func: PropTypes.func,
};
export default ThemesButton;
