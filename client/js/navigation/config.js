import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {View} from 'react-native';

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
      onPress={() => navigation.toggleDrawer()}
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

export const sharedScreenOptions = props => ({
  headerBackTitleVisible: false,
  headerLeft: props => (
    <View style={{flexDirection: 'row'}}>
      <SearchButton {...props} />
    </View>
  ),
  headerRight: props => (
    <View style={{flexDirection: 'row'}}>
      <NotificationButton {...props} />
      <MeatballButton {...props} />
    </View>
  ),
  headerStyle: {
    backgroundColor: '#DB4F48',
  },
});
