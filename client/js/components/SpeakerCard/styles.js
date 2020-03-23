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
  labelContainer: {
    width: 100,
    height: 75,
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
    marginLeft: 10,
    fontSize: 12,
  },
});

export default styles;
