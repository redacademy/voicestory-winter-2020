import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  largeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 275,
    marginVertical: 20,
    width: Dimensions.get('window').width - 75,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  smallButton: {
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 175,
    width: Dimensions.get('window').width * 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  largeCard: {
    width: '100%',
    borderRadius: 10,
    height: '100%',
    marginVertical: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  smallCard: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '70%',
    width: '100%',
    backgroundColor: 'blue',
    position: 'relative',
  },
  speaker: {
    fontWeight: '300',
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
    color: '#fbf7ef',
  },
  min: {
    color: '#fbf7ef',
  },
  play: {
    backgroundColor: '#3c3c3c',
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
  centerPlay: {
    backgroundColor: '#3c3c3c',
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: '60%',
    top: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  loader: {
    width: Dimensions.get('window').width * 0.6,
    borderRadius: 10,
    height: 175,
    marginVertical: 20,
    overflow: 'hidden',
  },
  errorContainer: {
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
