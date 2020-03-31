import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import CustomText from '../../components/CustomText/CustomText';
import PropTypes from 'prop-types';
const NotificationBanner = ({notification}) => {
  return (
    <View style={styles.banner}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={require('../../assets/icons/announcement.png')}
        />
      </View>
      <View>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>VoiceStory made an announcement:</Text>
        </View>
        <View style={styles.messageContainer}>
          <CustomText style={styles.message}>
            {notification.announcement}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

NotificationBanner.propTypes = {
  notification: PropTypes.string,
};
export default NotificationBanner;
