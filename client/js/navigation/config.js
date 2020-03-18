import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {View} from 'react-native';
import SearchBar from '../components/SearchBar';
import {Header} from '@react-navigation/stack';

const SearchButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        marginLeft: 10,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#9F3833',
        textShadowRadius: 1,
      }}
      name="magnify"
      color="white"
      size={25}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

const NotificationButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#9F3833',
        textShadowRadius: 1,
      }}
      name="bell"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Notification')}
    />
  );
};

const MeatballButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#9F3833',
        textShadowRadius: 1,
      }}
      name="dots-vertical"
      color="white"
      size={25}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

export const sharedScreenOptions = props => {
  return {
    headerBackTitleVisible: false,
    headerLeft: props => (
      <View style={{flexDirection: 'row'}}>
        <SearchButton {...props} />
        <SearchBar />
      </View>
    ),
    headerRight: () => {
      return (
        <View style={{flexDirection: 'row'}}>
          <NotificationButton {...props} navigation={props.navigation} />
          <MeatballButton {...props} />
        </View>
      );
    },

    headerStyle: {
      backgroundColor: '#DB4F48',
    },
  };
};
