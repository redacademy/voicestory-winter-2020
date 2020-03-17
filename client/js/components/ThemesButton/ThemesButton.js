import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';

const ThemesButton = ({theme}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{theme}</Text>
    </TouchableOpacity>
  );
};

export default ThemesButton;
