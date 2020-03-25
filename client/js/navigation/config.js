import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
const {forwardRef, useRef, useImperativeHandle} = React;
import {View, LayoutAnimation, TouchableOpacity, Text} from 'react-native';
import SearchBar from '../components/SearchBar';
import TopDrawer from './TopDrawer';

const SearchButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        marginLeft: 10,
        transform: [{translateY: 3}],
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#9F3833',
        textShadowRadius: 1,
      }}
      name="magnify"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Search')}
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

const MeatballButton = props => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        marginRight: 10,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#9F3833',
        textShadowRadius: 1,
      }}
      name="dots-vertical"
      color="white"
      size={25}
    />
  );
};
const BackButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        marginRight: 10,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#9F3833',
        textShadowRadius: 1,
      }}
      name="arrow-left"
      color="white"
      size={25}
      onPress={() => navigation.goBack()}
    />
  );
};
const CloseButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        marginRight: 10,
        textShadowOffset: {width: 2, height: 2},
        textShadowColor: '#9F3833',
        textShadowRadius: 1,
      }}
      name="close"
      color="white"
      size={25}
    />
  );
};

export const sharedScreenOptions = props => {
  let drawerRef = React.createRef();
  return {
    headerBackTitleVisible: false,
    headerLeft: () => {
      return props.route.name === 'Explore' ||
        props.route.name === 'Events' ||
        props.route.name === 'My Tickets' ||
        props.route.name === 'Profile' ? (
        <>
          <View style={{flexDirection: 'row'}}>
            <SearchButton {...props} />
          </View>
          <TopDrawer
            navigation={props.navigation}
            ref={ref => {
              drawerRef = ref;
            }}
          />
        </>
      ) : (
        <>
          <View style={{flexDirection: 'row'}}>
            <BackButton navigation={props.navigation} />
          </View>
          <TopDrawer
            navigation={props.navigation}
            ref={ref => {
              drawerRef = ref;
            }}
          />
        </>
      );
    },
    headerRight: () => {
      return (
        <>
          <View style={{flexDirection: 'row'}}>
            <NotificationButton {...props} navigation={props.navigation} />
            {drawerRef.state && !drawerRef.state.isOpen ? (
              <TouchableOpacity onPress={() => drawerRef.state.toggleHandle()}>
                <MeatballButton {...props} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => drawerRef.state.toggleHandle()}>
                <CloseButton {...props} />
              </TouchableOpacity>
            )}
          </View>
        </>
      );
    },
    headerStyle: {
      backgroundColor: '#DB4F48',
    },
  };
};
export const sharedDrawerOptions = props => {
  return {
    headerBackTitleVisible: false,
    headerLeft: () => (
      <>
        <BackButton navigation={props.navigation} />
      </>
    ),
    headerStyle: {
      backgroundColor: '#DB4F48',
    },
  };
};
