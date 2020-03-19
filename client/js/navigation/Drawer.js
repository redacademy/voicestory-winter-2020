import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Text from '../components/CustomText/CustomText';
import Drawer from 'react-native-drawer';

let drawerRef;

export const closeDrawer = () => {
  drawerRef.close();
};

export const openDrawer = () => {
  drawerRef.open();
};

const MeatballDrawer = ({navigation}) => {
  return (
    <>
      <Drawer
        type="overlay"
        ref={ref => {
          drawerRef = ref;
        }}
        content={
          <View style={styles.drawerContainer}>
            <View style={styles.menu}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Settings')}
                style={styles.border}>
                <Text style={styles.menuItem}>Settings</Text>
              </TouchableOpacity>
              <View style={styles.border}>
                <Text style={styles.menuItem}>About Us</Text>
              </View>
              <View style={styles.border}>
                <Text style={styles.menuItem}>Contact Us</Text>
              </View>
              <View>
                <Text style={styles.menuItem}>Privacy Policy</Text>
              </View>
            </View>
            <View></View>
          </View>
        }
        tapToClose={true}
        open={false}
        side="top"
        openDrawerOffset={-1000}
        styles={drawerStyles}></Drawer>
    </>
  );
};

const drawerStyles = {
  drawer: {
    transform: [{translateY: 15}],
  },
};
export default MeatballDrawer;
