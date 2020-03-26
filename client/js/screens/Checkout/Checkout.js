import React from 'react';
import {TouchableOpacity, View, ScrollView, Image} from 'react-native';
import Text from '../../components/CustomText/CustomText';
import styles from './styles';
import CheckoutTabNav from '../../navigation/CheckoutTab';

const Checkout = ({event, navigation}) => {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={require('../../assets/images/winstonatstage.jpg')}
        />
      </View>
      <Text style={styles.title}>Addicted to Pain</Text>

      <View style={styles.container}>
        <CheckoutTabNav event={event} />
      </View>
    </ScrollView>
  );
};

export default Checkout;
