import React, {Component} from 'react';
import {View, TouchableOpacity, Button, Dimensions} from 'react-native';
import styles from './styles';
import Text from '../components/CustomText/CustomText';
import Drawer from 'react-native-drawer';
import MainView from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let drawerRef;

export const closeDrawer = () => {
  drawerRef.close();
};

export const openDrawer = () => {
  drawerRef.open();
};

const DrawerNav = ({navigation}) => {
  return (
    <>
      <Drawer
        type="overlay"
        ref={ref => {
          drawerRef = ref;
        }}
        content={
          <>
            {/* <TouchableOpacity onPress={closeDrawer}> */}
            <View style={styles.drawerContainer}>
              <View style={styles.menu}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Settings');
                    closeDrawer();
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('About Us');
                    closeDrawer();
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>About Us</Text>
                </TouchableOpacity>
                <View style={styles.border}>
                  <Text style={styles.menuItem}>Contact Us</Text>
                </View>
                <View>
                  <Text style={styles.menuItem}>Privacy Policy</Text>
                </View>
                <Icon
                  name="close"
                  size={20}
                  color="#FBF7EF"
                  onPress={closeDrawer}
                />
              </View>
            </View>
            {/* </TouchableOpacity> */}
            <MainView />
          </>
        }
        acceptTap={true}
        tapToClose={true}
        side="top"
        panCloseMask={1}
        // closedDrawerOffset={914}
        styles={drawerStyles}></Drawer>
    </>
  );
};

const drawerStyles = {
  drawer: {
    // transform: [{translateY: 15}],
    // translateY - 100%
  },
};
export default DrawerNav;
