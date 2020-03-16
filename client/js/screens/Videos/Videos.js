import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Videos = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
        <Text>Theme</Text>
      </TouchableOpacity>
    </>
  );
};

export default Videos;
