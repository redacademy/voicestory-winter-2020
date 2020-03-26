import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CheckoutTicketSelectScreen from '../screens/CheckoutTicketSelect';
import CheckoutInfoScreen from '../screens/CheckoutInfo';
import CheckoutPaymentScreen from '../screens/CheckoutPayment';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CheckoutTab = createMaterialTopTabNavigator();

export default CheckoutTabNav = props => {
  console.log(props);
  return (
    <CheckoutTab.Navigator
      swipeEnabled={false}
      sceneContainerStyle={{backgroundColor: '#FBF7EF'}}
      tabBarOptions={{
        style: {
          backgroundColor: '#FBF7EF',
        },
        labelStyle: {
          fontFamily: 'Lato-Bold',
          textTransform: 'none',
          fontSize: 15,
        },
        indicatorStyle: {
          backgroundColor: '#DB4F48',
        },
      }}>
      <CheckoutTab.Screen
        name="Select Ticket"
        component={CheckoutTicketSelectScreen}
      />
      <CheckoutTab.Screen name="Guest Info" component={CheckoutInfoScreen} />
      <CheckoutTab.Screen name="Payment" component={CheckoutPaymentScreen} />
    </CheckoutTab.Navigator>
  );
};
