import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const UserProfile = ({navigation}) => {
  return (
    <>
      <TouchableOpacity>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Application')}>
        <Text>Apply to be a Speaker</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
        <Text>Favorite Videos</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Downloaded Videos</Text>
      </TouchableOpacity>
    </>
  );
};

export default UserProfile;
