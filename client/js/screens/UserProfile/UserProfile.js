import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';

const UserProfile = ({navigation}) => {
  return (
    <>
      <TouchableOpacity>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Application')}>
        <Text>Apply to be a Speaker</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Fav')}>
        <Text>Favorite Videos</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Downloaded Videos</Text>
      </TouchableOpacity>
    </>
  );
};

export default UserProfile;
