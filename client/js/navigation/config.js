import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import TopDrawer from './TopDrawer';
import {UserContext} from '../context/UserContext';
import PropTypes from 'prop-types';

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

const MeatballButton = () => {
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

export const sharedScreenOptions = ({route, navigation}) => {
  let drawerRef = React.createRef();
  const {user, setUser} = useContext(UserContext);

  return {
    headerBackTitleVisible: false,
    headerLeft: () => {
      return route.name === 'Explore' ||
        route.name === 'Events' ||
        route.name === 'My Tickets' ||
        route.name === 'Profile' ? (
        <TopDrawer
          navigation={navigation}
          setUser={setUser}
          user={user}
          ref={ref => {
            drawerRef = ref;
          }}
        />
      ) : (
        <>
          <View style={{flexDirection: 'row'}}>
            <BackButton navigation={navigation} />
          </View>
          <TopDrawer
            navigation={navigation}
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
      return route.name === 'Explore' ||
        route.name === 'Events' ||
        route.name === 'My Tickets' ? (
        <>
          <View style={{flexDirection: 'row'}}>
            <NotificationButton navigation={navigation} />
            <TouchableOpacity onPress={() => drawerRef.state.toggleHandle()}>
              <MeatballButton />
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
export const sharedDrawerOptions = ({navigation}) => {
  return {
    headerBackTitleVisible: false,
    headerLeft: () => (
      <>
        <BackButton navigation={navigation} />
      </>
    ),
    headerStyle: {
      backgroundColor: '#DB4F48',
    },
  };
};
export const onlyBackStackOptions = ({route, navigation}) => {
  return {
    headerBackTitleVisible: false,
    headerLeft: () => {
      return route.name === 'Profile' || route.name === 'Search' ? null : (
        <BackButton navigation={navigation} />
      );
    },
    headerStyle: {
      backgroundColor: '#DB4F48',
    },
  };
};

NotificationButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};
BackButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};
sharedScreenOptions.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
sharedDrawerOptions.propTypes = {
  navigation: PropTypes.object.isRequired,
};
onlyBackStackOptions.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
