import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Videos = ({navigation}) => {
  return (
    <>
      <TouchableOpacity>
        <Text>Newest</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Most Viewed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Theme')}>
        <Text>Theme</Text>
      </TouchableOpacity>
    </>
  );
};

export default Videos;
