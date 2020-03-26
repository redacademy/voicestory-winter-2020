import React from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';

const CheckoutInfo = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Button
            style={styles.button}
            bgcolor="#D84F48"
            label="Continue"
            // onPress={() => navigation.navigate('Ticket')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckoutInfo;
