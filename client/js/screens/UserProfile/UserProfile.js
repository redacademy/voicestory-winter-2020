import React from 'react';
import {Text, TouchableOpacity, Button, View} from 'react-native';
import styles from './styles';

const UserProfile = ({navigation, users}) => {
  return (
    <View>
      <Text>Firstname Lastname Placeholder</Text>
      <Text>emailplaceholder@gmail.com</Text>
      <TouchableOpacity>
        <Text>Edit</Text>
      </TouchableOpacity>
      <Button
        title="Apply to be a Speaker"
        onPress={() => navigation.navigate('Application')}
      />
      <Button
        title="Favorite Videos"
        onPress={() => navigation.navigate('Theme')}
      />
      <Button title="Downloaded Videos" />
    </View>
  );
};

export default UserProfile;
