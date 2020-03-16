import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreens from './Navigation';
import ThemeScreen from '../screens/Theme';

const RootStack = createStackNavigator();
const RootStackScreens = props => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Main" component={MainScreens} />
  </RootStack.Navigator>
);
export default RootStackScreens;
