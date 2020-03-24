import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';

const ThemesButton = ({theme, style, source, iconDimension}) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
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

export default ThemesButton;
