import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const EventInfo = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('SpeakerProfile')}>
        <Text>Speakers</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        {/* not linked yet */}
        <Text>Get Tickets</Text>
      </TouchableOpacity>
    </>
  );
};

export default EventInfo;
