import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from '../screens/Settings';
import AboutUsScreen from '../screens/AboutUs';
import ContactUsScreen from '../screens/ContactUs';
import PrivacyPolicyScreen from '../screens/PrivacyPolicy';
import {sharedScreenOptions} from './config';
import React from 'react';

const DrawerNavStack = createStackNavigator();
export const DrawerNavStackScreens = props => {
  return (
    <DrawerNavStack.Navigator mode="card" screenOptions={sharedScreenOptions}>
      <DrawerNavStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <DrawerNavStack.Screen
        name="About Us"
        component={AboutUsScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <DrawerNavStack.Screen
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <DrawerNavStack.Screen
        name="Privacy Policy"
        component={PrivacyPolicyScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
    </DrawerNavStack.Navigator>
  );
};
