import React from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './styles';
import NotificationBanner from '../NotificationBanner';

const NotificationsList = () => {
  return (
    <View>
      <NotificationBanner />
    </View>
  );
};

export default NotificationsList;
