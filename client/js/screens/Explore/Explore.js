import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Explore = ({navigation}) => {
  return (
    <>
      <View>
        <Text>Videos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Themes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Speakers</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Speakers')}>
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Explore;
