import React from 'react';
import styles from './styles';
import Text from '../CustomText/CustomText';
import {TouchableOpacity} from 'react-native';

export default Button = ({style, label, onPress, bgcolor, icon}) => {
  return (
    <TouchableOpacity
      style={[style, styles.button, {backgroundColor: `${bgcolor}`}]}
      onPress={onPress}>
      <Text style={styles.label}>
        {icon}
        {label}
      </Text>
    </TouchableOpacity>
  );
};
