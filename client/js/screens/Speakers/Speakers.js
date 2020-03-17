import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Speakers = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('SpeakerProfile')}>
        <Text>Speaker</Text>
      </TouchableOpacity>
    </>
  );
};

export default Speakers;
