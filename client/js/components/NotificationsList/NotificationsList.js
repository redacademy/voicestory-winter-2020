import React from 'react';
import {View} from 'react-native';
import NotificationBanner from '../NotificationBanner';
import PropTypes from 'prop-types';

const NotificationsList = ({notifications}) => {
  return (
    <View>
      {notifications.map(notification => (
        <NotificationBanner key={notification.id} notification={notification} />
      ))}
    </View>
  );
};

NotificationsList.propTypes = {
  notification: PropTypes.array,
};
export default NotificationsList;
