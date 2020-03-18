import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#DDDDDD',
    shadowOpacity: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
    transform: [{translateY: -14}],
  },
  videoLabel: {
    fontFamily: 'Lato-Bold',
    paddingLeft: 10,
    fontSize: 18,
  },
});

export default styles;
