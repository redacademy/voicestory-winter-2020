import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreens from './Navigation';
import QRCodeScreen from '../screens/QRCode';

const RootStack = createStackNavigator();
const RootStackScreens = props => (
  <RootStack.Navigator mode="modal" headerMode="none">
    <RootStack.Screen name="Main" component={MainScreens} />
    <RootStack.Screen name="QRCode" component={QRCodeScreen} />
  </RootStack.Navigator>
);
export default RootStackScreens;
