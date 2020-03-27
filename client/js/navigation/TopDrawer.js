import React, {useState, Component} from 'react';
import {Dimensions} from 'react-native';
import {
  Animated,
  Easing,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../components/CustomText/CustomText';
import styles from './styles';

class TopDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      toggleHandle: () => {
        this.setState({isOpen: !this.state.isOpen});
        LayoutAnimation.easeInEaseOut();
      },
    };
  }
  render() {
    const navigation = this.props.navigation;

    return (
      <>
        {this.state.isOpen ? (
          <>
            <View style={styles.drawerContainer}>
              <View style={styles.menu}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {screen: 'Settings'});
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {screen: 'About Us'});
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>About Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {screen: 'Contact Us'});
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DrawerNav', {
                      screen: 'Privacy Policy',
                    });
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Privacy Policy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  style={styles.border}>
                  <Text style={styles.menuItem}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.state.toggleHandle()}>
              <View style={styles.overlay}></View>
            </TouchableOpacity>
          </>
        ) : null}
      </>
    );
  }
}
export default TopDrawer;
