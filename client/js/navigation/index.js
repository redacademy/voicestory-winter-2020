import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavScreens} from './Navigation';
import TicketScreen from '../screens/Ticket';
import NotificationModal from '../screens/Notification';
import {DrawerNavStackScreens} from './DrawerNavigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import CheckoutConfirmation from '../screens/CheckoutConfirmation';

const RootStack = createStackNavigator();
const RootStackScreens = props => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Login" component={Home} />
    <RootStack.Screen name="Signup" component={Login} />
    <RootStack.Screen name="Main" component={BottomTabNavScreens} />
    <RootStack.Screen name="DrawerNav" component={DrawerNavStackScreens} />
    <RootStack.Screen name="Ticket" component={TicketScreen} />
    <RootStack.Screen name="Notification" component={NotificationModal} />
    <RootStack.Screen name="Confirmation" component={CheckoutConfirmation} />
  </RootStack.Navigator>
);

export default RootStackScreens;
