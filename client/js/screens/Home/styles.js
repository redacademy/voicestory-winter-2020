import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'space-around',
    backgroundColor: '#FBF7EF',
  },
  images: {
    alignItems: 'center',
  },
  logo: {
    width: 350,
    resizeMode: 'contain',
  },
  mic: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
  toggleContainer: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  formToggle: {
    fontSize: 18,
  },
  underline: {
    fontSize: 18,
    fontWeight: '500',
  },
  borderBottom: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#DB4F48',
  },
});

export default styles;
