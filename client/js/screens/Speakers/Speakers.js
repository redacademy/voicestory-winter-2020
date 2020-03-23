import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../components/CustomText/CustomText';

const Speakers = ({users, navigation}) => {
  users = users.filter(user => user.isSpeaker != null);
  console.log('Speakers', users);
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('SpeakerProfile')}>
        <Text>Speaker</Text>
      </TouchableOpacity>
    </>
  );
};

export default Speakers;
