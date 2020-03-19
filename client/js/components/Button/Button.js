import React from 'react';
import styles from './styles';
import Text from '../CustomText/CustomText';
import {TouchableOpacity} from 'react-native';

export default Button = ({text}) => {
  return (
    <Button style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  );
};
