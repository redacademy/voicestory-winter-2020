import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Text from '../../components/CustomText/CustomText';
import Drawer from 'react-native-drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

class MeatballDrawer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this);
    const navigation = this.props.navigation;
    // console.log(navigation);
    closeControlPanel = () => {
      this._drawer.close();
    };
    openControlPanel = () => {
      this._drawer.open();
    };
    return (
      <>
        <Drawer
          type="overlay"
          ref={ref => (this._drawer = ref)}
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

        <TouchableOpacity
          onPress={() => {
            this._drawer.open();
          }}>
          <Text>Hello</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const drawerStyles = {
  drawer: {
    transform: [{translateY: 15}],
  },
};
export default MeatballDrawer;
