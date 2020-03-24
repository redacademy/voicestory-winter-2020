import React from 'react';
import {TouchableOpacity, View, Linking} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ContactUs = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.emailContainer}>
        <Text style={styles.email}>
          You can email Winston with any questions, comments or feedback at:
        </Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL('mailto:winston@voicestory.ca')}>
          <Text style={styles.label}>winston@voicestory.ca </Text>
        </TouchableOpacity>
        <Text>or by booking a meeting by: </Text>
        <TouchableOpacity
          style={styles.link}
          onPress={() => Linking.openURL('https://www.voicestory.ca/')}>
          <Text style={styles.label}>clicking here.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.additional}>Additional Contact Info</Text>
        <TouchableOpacity
          style={styles.websiteContainer}
          onPress={() => Linking.openURL('https://www.voicestory.ca/')}>
          <Icon name="web" size={25} color="#507EA2" />

          <Text style={styles.website}>http://www.voicestory.ca</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>PAL Studio Theatre</Text>
        <Text style={styles.address}>581 Cardero Street</Text>
        <Text style={styles.city}>Vancouver, British Columbia</Text>
      </View>
    </View>
  );
};

export default ContactUs;
