import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../components/CustomText/CustomText';

const Speakers = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Speaker Profile')}>
        <Text>Speaker</Text>
      </TouchableOpacity>
    </>
  );
};

export default Speakers;
