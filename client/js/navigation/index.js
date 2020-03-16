import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreens from './Navigation';

const RootStack = createStackNavigator();
const RootStackScreens = props => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen name="Main" component={MainScreens} />
  </RootStack.Navigator>
);
export default RootStackScreens;
