import React from 'react';
<<<<<<< HEAD
import {Text} from 'react-native';
import Home from '../Home';
import LoginForm from '../../components/LoginForm';

const Events = () => {
  return (
    <>
      <Text>Events Page</Text>
      <Home />
    </>
=======
import {Text, TouchableOpacity} from 'react-native';

const Events = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('EventInfo')}>
      <Text>Event Info</Text>
    </TouchableOpacity>
>>>>>>> develop
  );
};

export default Events;
