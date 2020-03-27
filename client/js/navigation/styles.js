import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  drawerContainer: {
    width: Dimensions.get('window').width,
    transform: [{translateY: 168}],
    position: 'absolute',
    zIndex: 999,
  },
  overlay: {
    height: Dimensions.get('window').height * 2,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
