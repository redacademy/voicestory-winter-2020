import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/Explore';
import EventsScreen from '../screens/Events';
import TicketsScreen from '../screens/Tickets';
import UserProfileScreen from '../screens/UserProfile';
import VideosScreen from '../screens/Videos';
import SpeakersScreen from '../screens/Speakers';
import SpeakerScreen from '../screens/SpeakerProfile';
import ThemeScreen from '../screens/Theme';
import EventInfoScreen from '../screens/EventInfo';
import TicketInfoScreen from '../screens/TicketInfo';
import ApplicationScreen from '../screens/Application';
import FAQScreen from '../screens/FAQ';
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
          headerTintColor: '#FBF7EF',
        }}
      />
      <ExploreStack.Screen
        name="Videos"
        component={VideosScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <ExploreStack.Screen
        name="Theme"
        component={ThemeScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <ExploreStack.Screen
        name="Speakers"
        component={SpeakersScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <ExploreStack.Screen
        name="SpeakerProfile"
        component={SpeakerScreen}
        options={{
          headerTintColor: '#FBF7EF',
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
          headerTintColor: '#FBF7EF',
        }}
      />
      <EventsStack.Screen
        name="EventInfo"
        component={EventInfoScreen}
        options={{
          headerTintColor: '#FBF7EF',
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
        name="My Tickets"
        component={TicketsScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <TicketsStack.Screen
        name="TicketInfo"
        component={TicketInfoScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
    </TicketsStack.Navigator>
  );
};
const UserProfileStack = createStackNavigator();
const UserProfileStackScreens = props => {
  return (
    <UserProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={sharedScreenOptions}>
      <UserProfileStack.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <UserProfileStack.Screen
        name="Application"
        component={ApplicationScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <UserProfileStack.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
    </UserProfileStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
const BottomTabNavScreens = props => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: '#FBF7EF',
      inactiveTintColor: '#CACACA',
      style: {
        backgroundColor: '#DB4F48',
      },
      labelStyle: {
        fontSize: 12,
        // fontFamily: '',
      },
    }}
    screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, size, color}) => {
      //     let iconName;
      //     if (route.name === 'Explore') {
      //       iconName = focused ? 'calendar-blank' : 'calendar-blank-outline';
      //     } else if (route.name === 'Events') {
      //       iconName = focused ? 'map' : 'map-outline';
      //     } else if (route.name === 'Tickets') {
      //       iconName = focused ? 'heart' : 'heart-outline';
      //     } else if (route.name === 'Profile') {
      //       iconName = focused ? 'information' : 'information-outline';
      //     }
      //     return (
      //       <MaterialCommunityIcons name={iconName} size={size} color={color} />
      //     );
      //   },
    })}>
    <BottomTabNav.Screen name="Explore" component={ExploreStackScreens} />
    <BottomTabNav.Screen name="Events" component={EventsStackScreens} />
    <BottomTabNav.Screen name="Tickets" component={TicketsStackScreens} />
    <BottomTabNav.Screen name="Profile" component={UserProfileStackScreens} />
  </BottomTabNav.Navigator>
);

export default BottomTabNavScreens;
