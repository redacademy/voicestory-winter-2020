import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import TopDrawer from './TopDrawer';
import {UserContext} from '../context/UserContext';

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

export const sharedScreenOptions = props => {
  let drawerRef = React.createRef();
  const {user, setUser} = useContext(UserContext);

  return {
    headerBackTitleVisible: false,
    headerLeft: () => {
      return props.route.name === 'Explore' ||
        props.route.name === 'Events' ||
        props.route.name === 'My Tickets' ||
        props.route.name === 'Profile' ? (
        <TopDrawer
          navigation={props.navigation}
          setUser={setUser}
          user={user}
          ref={ref => {
            drawerRef = ref;
          }}
        />
      ) : (
        <>
          <View style={{flexDirection: 'row'}}>
            <BackButton navigation={props.navigation} />
          </View>
          <TopDrawer
            navigation={props.navigation}
            setUser={setUser}
            user={user}
            ref={ref => {
              drawerRef = ref;
            }}
          />
        </>
      );
    },
    headerRight: () => {
      return props.route.name === 'Explore' ||
        props.route.name === 'Events' ||
        props.route.name === 'My Tickets' ? (
        <>
          <View style={{flexDirection: 'row'}}>
            <NotificationButton {...props} navigation={props.navigation} />
            <TouchableOpacity onPress={() => drawerRef.state.toggleHandle()}>
              <MeatballButton {...props} />
            </TouchableOpacity>
          </View>
        </>
      ) : null;
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
export const onlyBackStackOptions = props => {
  return {
    headerBackTitleVisible: false,
    headerLeft: () => {
      return props.route.name === 'Profile' ||
        props.route.name === 'Search' ? null : (
        <BackButton navigation={props.navigation} />
      );
    },
    headerStyle: {
      backgroundColor: '#DB4F48',
    },
  };
};
