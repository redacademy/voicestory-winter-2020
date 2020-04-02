import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FBF7EF',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    alignItems: 'center',
    marginTop: 50,
  },
  close: {
    position: 'absolute',
    top: '6%',
    right: '8%',
  },
  heart: {
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: '#8c8c8c',
    textShadowRadius: 10,
    marginBottom: 20,
  },
  thankyou: {
    fontFamily: 'Lato-Black',
    fontSize: 30,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginLeft: 50,
    marginRight: 50,
  },
});

export default styles;
