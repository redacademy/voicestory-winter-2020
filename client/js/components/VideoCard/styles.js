import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width - 75,
    borderRadius: 10,
    height: 275,
    marginVertical: 20,
    overflow: 'hidden',
  },
  image: {
    height: '70%',
    backgroundColor: 'blue',
  },
  info: {
    height: '30%',
    flexDirection: 'row',
  },
  timeContainer: {
    backgroundColor: 'red',
    height: '100%',
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    height: '100%',
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  name: {
    fontWeight: '200',
  },
  title: {
    fontWeight: '600',
  },
  time: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  min: {
    color: 'white',
  },
  play: {
    backgroundColor: 'darkgrey',
    height: 100,
    width: 100,
  },
});

export default styles;
