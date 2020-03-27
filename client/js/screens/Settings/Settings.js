import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';

const Settings = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.border}>
          <Text style={styles.heading}>Notifications</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.heading}>Limit mobile data usage</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.heading}>Download over wi-fi only</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.heading}>Build version</Text>
        </View>
      </View>
    </>
  );
};

export default Settings;
