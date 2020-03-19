import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#FBF7EF',
    flexDirection: 'row',
    height: 75,
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  author: {
    fontFamily: 'Lato-Bold',
  },
  authorContainer: {
    width: '95%',
    marginTop: 9,
    marginLeft: 10,
  },
  message: {
    fontSize: 14,
  },
  messageContainer: {
    width: '85%',
    transform: [{translateX: 10}],
  },
  image: {
    height: 60,
    width: 60,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 7,
  },
});

export default styles;
