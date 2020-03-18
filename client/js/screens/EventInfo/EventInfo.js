import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../components/CustomText/CustomText';

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
