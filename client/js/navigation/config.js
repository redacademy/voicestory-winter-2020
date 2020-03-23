import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {View} from 'react-native';
import SearchBar from '../components/SearchBar';
import DrawerNav from './Drawer';
import {openDrawer} from './Drawer';
import TopDrawer from './TopDrawer';
import {toggleHandle} from './TopDrawer';
import {drawer} from './TopDrawer';
import {DrawerContext} from '../App';

const SearchButton = ({navigation}) => {
  return (
    <Icon
      style={{
        marginLeft: 10,
        marginLeft: 10,
        transform: [{translateY: 10}],
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

const MeatballButton = props => {
  console.log(props);
  // const {setOpen, isOpen} = React.useContext(DrawerContext);
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
      onPress={() => {
        // setOpen(!isOpen);
        toggleHandle();
      }}
    />
  );
};

export const sharedScreenOptions = props => {
  console.log(props);
  return {
    headerBackTitleVisible: false,
    headerLeft: () => (
      <>
        <View style={{flexDirection: 'row'}}>
          <SearchButton {...props} />
          {/* <SearchBar /> */}
        </View>
        {/* <DrawerNav navigation={props.navigation} /> */}
        <TopDrawer navigation={props.navigation} />
      </>
    ),
    headerRight: () => (
      <>
        <View style={{flexDirection: 'row'}}>
          <NotificationButton {...props} navigation={props.navigation} />
          <MeatballButton {...props} />
        </View>
      </>
    ),
    headerStyle: {
      backgroundColor: '#DB4F48',
    },
  };
};
