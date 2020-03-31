import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreScreen from '../screens/Explore';
import EventsScreen from '../screens/Events';
import TicketsScreen from '../screens/Tickets';
import UserProfileScreen from '../screens/UserProfile';
import VideosScreen from '../screens/Videos';
import VideoScreen from '../screens/Video';
import FavesScreen from '../screens/Faves';
import VideoPlayer from '../screens/VideoPlayer';
import SpeakersScreen from '../screens/Speakers';
import SpeakerScreen from '../screens/SpeakerProfile';
import ThemeScreen from '../screens/Theme';
import EventInfoScreen from '../screens/EventInfo';
import TicketInfoScreen from '../screens/TicketInfo';
import CheckoutScreen from '../screens/Checkout';
import ApplicationScreen from '../screens/Application';
import FAQScreen from '../screens/FAQ';
import {sharedScreenOptions} from './config';
import {profileStackOptions} from './config';
import SearchScreen from '../screens/Search';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Image} from 'react-native';
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
        options={({route}) => ({
          headerTintColor: '#FBF7EF',
          title: route.params.theme,
        })}
      />
      <ExploreStack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <ExploreStack.Screen
        name="Now Playing"
        component={VideoPlayer}
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
        name="Speaker Profile"
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
        name="Event Info"
        component={EventInfoScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <EventsStack.Screen
        name="Speaker Profile"
        component={SpeakerScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <EventsStack.Screen
        name="Checkout"
        component={CheckoutScreen}
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
        name="Ticket Info"
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
      screenOptions={profileStackOptions}>
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
      <UserProfileStack.Screen
        name="Faves"
        component={FavesScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <UserProfileStack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
    </UserProfileStack.Navigator>
  );
};
const SearchStack = createStackNavigator();
const SearchStackScreens = props => {
  return (
    <SearchStack.Navigator
      initialRouteName="Search"
      screenOptions={sharedScreenOptions}>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <SearchStack.Screen
        name="Event Info"
        component={EventInfoScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <SearchStack.Screen
        name="Video"
        component={VideoScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
      <SearchStack.Screen
        name="Speaker Profile"
        component={SpeakerScreen}
        options={{
          headerTintColor: '#FBF7EF',
        }}
      />
    </SearchStack.Navigator>
  );
};

const BottomTabNav = createBottomTabNavigator();
export const BottomTabNavScreens = props => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: '#FBF7EF',
      inactiveTintColor: '#FBF7EF',
      activeBackgroundColor: '#C24640',
      inactiveBackgroundColor: '#DB4F48',
      tabStyle: {
        borderRadius: 20,
        height: 120,
      },
      style: {
        backgroundColor: '#DB4F48',
        borderRadius: 20,
        height: 80,
        transform: [{translateY: -20}],
      },
      labelStyle: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        transform: [{translateY: -40}],
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        if (route.name === 'Explore') {
          return (
            <Image
              style={{height: 40, width: 40, transform: [{translateY: -15}]}}
              resizeMode={'contain'}
              source={require('../assets/icons/explore.png')}
            />
          );
        } else if (route.name === 'Events') {
          return (
            <Image
              style={{height: 35, width: 35, transform: [{translateY: -15}]}}
              resizeMode={'contain'}
              source={require('../assets/icons/event.png')}
            />
          );
        } else if (route.name === 'Tickets') {
          return (
            <Image
              style={{height: 35, width: 35, transform: [{translateY: -15}]}}
              resizeMode={'contain'}
              source={require('../assets/icons/ticket.png')}
            />
          );
        } else if (route.name === 'Profile') {
          return (
            <Image
              style={{height: 30, width: 30, transform: [{translateY: -15}]}}
              resizeMode={'contain'}
              source={require('../assets/icons/profile.png')}
            />
          );
        } else if (route.name === 'Search') {
          return (
            <Icon
              style={{
                textShadowOffset: {width: 2, height: 2},
                textShadowColor: '#9F3833',
                textShadowRadius: 8,
                transform: [{translateY: -15}],
              }}
              name="magnify"
              color="white"
              size={40}
            />
          );
        }
      },
    })}>
    <BottomTabNav.Screen name="Explore" component={ExploreStackScreens} />
    <BottomTabNav.Screen name="Events" component={EventsStackScreens} />
    <BottomTabNav.Screen name="Search" component={SearchStackScreens} />
    <BottomTabNav.Screen name="Tickets" component={TicketsStackScreens} />
    <BottomTabNav.Screen name="Profile" component={UserProfileStackScreens} />
  </BottomTabNav.Navigator>
);
