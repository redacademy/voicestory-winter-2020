import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  card: {
    width: Dimensions.get('window').width - 75,
    borderRadius: 10,
    height: 275,
    marginVertical: 20,
    overflow: 'hidden',
    position: 'relative',
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
    backgroundColor: '#cb584e',
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
    backgroundColor: '#454545',
    height: 60,
    width: 60,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    bottom: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});

export default styles;
