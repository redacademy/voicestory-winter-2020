import React from 'react';
import {View, Image, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';

const NotificationBanner = () => {
  return (
    <>
      <View style={styles.banner}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={require('../../assets/images/winstonatstage.jpg')}
            borderRadius={50}
          />
        </View>
        <View>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>Ivan Dai made an announcement:</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              I love being a zoomer. I love being a zoomer. I love being a
              zoomer.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.banner}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={require('../../assets/images/winstonatstage.jpg')}
            borderRadius={50}
          />
        </View>
        <View>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>Ivan Dai made an announcement:</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              I love being a zoomer. I love being a zoomer. I love being a
              zoomer.
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default NotificationBanner;
