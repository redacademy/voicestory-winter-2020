import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ExploreScreen from '../screens/Explore';
import EventsScreen from '../screens/Events';
import TicketsScreen from '../screens/Tickets';
import UserProfileScreen from '../screens/UserProfile';
import {sharedScreenOptions} from './config';

const ExploreStack = createStackNavigator();
const ExploreStackScreens = props => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={sharedScreenOptions}>
      <ExploreStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </ExploreStack.Navigator>
  );
};
const EventsStack = createStackNavigator();
const EventsStackScreens = props => {
  return (
    <EventsStack.Navigator
      initialRouteName="Events"
      screenOptions={sharedScreenOptions}>
      <EventsStack.Screen
        name="Events"
        component={EventsScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </EventsStack.Navigator>
  );
};
const TicketsStack = createStackNavigator();
const TicketsStackScreens = props => {
  return (
    <TicketsStack.Navigator
      initialRouteName="Tickets"
      screenOptions={sharedScreenOptions}>
      <TicketsStack.Screen
        name="Tickets"
        component={TicketsScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </TicketsStack.Navigator>
  );
};
const UserProfileStack = createStackNavigator();
const UserProfileStackScreens = props => {
  return (
    <UserProfileStack.Navigator
      initialRouteName="Explore"
      screenOptions={sharedScreenOptions}>
      <UserProfileStack.Screen
        name="Explore"
        component={UserProfileScreen}
        options={{
          headerTintColor: 'white',
        }}
      />
    </UserProfileStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
const BottomTabNavScreens = props => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: '#CACACA',
      style: {
        backgroundColor: 'black',
      },
      labelStyle: {
        fontSize: 10,
        // fontFamily: '',
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, size, color}) => {
        let iconName;
        if (route.name === 'Explore') {
          iconName = focused ? 'calendar-blank' : 'calendar-blank-outline';
        } else if (route.name === 'Events') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Tickets') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'information' : 'information-outline';
        }
        return (
          <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
      },
    })}>
    <BottomTabNav.Screen name="Explore" component={ExploreStackScreens} />
    <BottomTabNav.Screen name="Events" component={EventsStackScreens} />
    <BottomTabNav.Screen name="Tickets" component={TicketsStackScreens} />
    <BottomTabNav.Screen name="Profile" component={UserProfileStackScreens} />
  </BottomTabNav.Navigator>
);

export default BottomTabNavScreens;
