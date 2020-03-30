import React from 'react';
import {View} from 'react-native';
import NotificationBanner from '../NotificationBanner';

const NotificationsList = ({notifications}) => {
  return (
    <View>
      {notifications.map(notification => (
        <NotificationBanner key={notification.id} notification={notification} />
      ))}
    </View>
  );
};

export default NotificationsList;
