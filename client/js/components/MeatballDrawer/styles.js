import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  drawerContainer: {
    height: Dimensions.get('window').height,
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width,
  },
  menu: {
    backgroundColor: '#9F3833',
    paddingRight: 30,
    paddingLeft: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  border: {
    borderBottomColor: '#DB4F48',
    borderBottomWidth: 2,
  },
  menuItem: {
    textAlign: 'right',
    color: '#FBF7EF',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    borderBottomWidth: 5,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default styles;
