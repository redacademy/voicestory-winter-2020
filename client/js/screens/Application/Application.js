import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Application = ({navigation}) => {
  return (
    <>
      <Text>VoiceStory live stage was created for you!</Text>
      <Text>
        Our vision is to give everyone the opportunity to share part of their
        story, a moment in their life that can impact someone who is stuck in
        the "Sea of Suck", that emotion space where one feels that no one
        understands, no one cares and that they are all alone.
      </Text>
      <Text>
        Everyone of us has stories stored within us, but their impact and
        potential to heal can not be unleashed until they are shared. If this
        makes you feel like you want to take the stage and share a story of your
        own, then we encourage you to apply to the theme that speaks to you the
        most.
      </Text>

      <TouchableOpacity>
        <Text>Upcoming Themes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
        <Text>Speaker FAQ</Text>
      </TouchableOpacity>
    </>
  );
};

export default Application;
