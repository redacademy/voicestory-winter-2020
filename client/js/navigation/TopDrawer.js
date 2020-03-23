import React, {useState} from 'react';
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
import {DrawerContext} from '../App';

const TopDrawer = props => {
  const {isOpen, setOpen} = React.useContext(DrawerContext);

  const [animatedDrawer, setAnimatedDrawer] = useState(new Animated.Value(0));
  const drawer = () => {
    setAnimatedDrawer(0);
    const createAnimation = (value, duration, easing, delay = 0) => {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay,
      });
    };
    Animated.parallel([
      createAnimation(animatedDrawer, 500, Easing.ease),
    ]).start();
  };
  // const [isOpen, setIsOpen] = useState(false);

  const toggleHandle = () => {
    setOpen(!isOpen);
    LayoutAnimation.easeInEaseOut();
  };

  return (
    <>
      {isOpen ? (
        // <TouchableOpacity onPress={(() => this.drawer, this.toggleHandle)}>
        <View style={styles.drawerContainer}>
          <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Settings');
              }}
              style={styles.border}>
              <Text style={styles.menuItem}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About Us');
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
          </View>
        </View>
      ) : null}

      <Icon
        name="close"
        size={20}
        color="#FBF7EF"
        onPress={() => {
          // drawer();
          // toggleHandle();
        }}
      />
    </>
  );
};

export default TopDrawer;
