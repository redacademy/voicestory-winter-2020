import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF7EF',
    // height: Dimensions.get('window').height,
  },
  heading: {
    color: '#1D1D1D',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginBottom: 15,
  },
  section: {},
  text: {
    color: '#1D1D1D',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    lineHeight: 25,
  },
  icon: {
    width: 45,
    height: 50,
    resizeMode: 'contain',
    marginRight: 20,
  },
  ticketinfo: {
    flexDirection: 'row',
    padding: 30,
  },
  price: {
    backgroundColor: '#F4F0E8',
    padding: 30,
  },
  dropdown: {
    width: 10,
  },
});

export default styles;
