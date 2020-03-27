import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#FBF7EF',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    flex: 2,
    textAlign: 'center',
    transform: [{translateX: 20}],
    paddingBottom: 15,
  },
  headerContainer: {
    backgroundColor: '#DB4F48',
    flexDirection: 'row',
  },
  heading: {
    color: '#FBF7EF',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  close: {
    marginRight: 20,
  },
  qrcodeContainer: {
    width: '100%',
    height: 350,
    flexDirection: 'row',
    transform: [{translateY: -70}],
  },
  qrcode: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    flex: 1,
  },
  ticket: {
    backgroundColor: '#FBF7EF',
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontFamily: 'Lato-Black',
    fontSize: 30,
    textAlign: 'center',
  },
  date: {
    marginTop: 20,
    textAlign: 'center',
  },
  time: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;
