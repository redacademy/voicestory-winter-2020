import React from 'react';
import {
  Animated,
  Easing,
  View,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../components/CustomText';
import styles from './styles';

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.animatedRotate = new Animated.Value(0);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    this.collapsible();
  }

  toggleHandle = () => {
    this.setState({isOpen: !this.state.isOpen});
    LayoutAnimation.easeInEaseOut();
  };
  collapsible = () => {
    this.animatedRotate.setValue(0);

    const createAnimation = (value, duration, easing, delay = 0) => {
      return Animated.timing(value, {
        toValue: 1,
        duration,
        easing,
        delay,
      });
    };
    Animated.parallel([
      createAnimation(this.animatedRotate, 500, Easing.ease),
    ]).start();
  };

  render() {
    const rotate = this.animatedRotate.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.isOpen ? ['0deg', '90deg'] : ['90deg', '0deg'],
    });
    return (
      <>
        <TouchableOpacity
          style={styles.titleContainer}
          onPress={() => {
            this.collapsible(), this.toggleHandle();
          }}>
          <View style={styles.position}>
            <Animated.Text style={styles.title}>
              {this.props.title}
            </Animated.Text>
          </View>
          <Animated.View
            style={{
              transform: [{rotate: rotate}],
              width: 50,
              height: 50,
              position: 'absolute',
              right: 10,
              top: '75%',
            }}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="menu-right"
              size={50}
            />
          </Animated.View>
        </TouchableOpacity>
        <>
          {this.state.isOpen ? (
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{this.props.description}</Text>
            </View>
          ) : null}
        </>
      </>
    );
  }
}

export default Collapsible;
