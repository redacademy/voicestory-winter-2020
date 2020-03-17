import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';

const ThemesButton = ({theme, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.label}>{theme}</Text>
    </TouchableOpacity>
  );
};

export default ThemesButton;
