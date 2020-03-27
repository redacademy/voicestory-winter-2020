import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F0E8',
  },
  content: {
    alignSelf: 'center',
    width: '80%',
    height: Dimensions.get('window').height,
    marginTop: 50,
  },
  information: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  name: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  title: {
    width: 150,
    fontFamily: 'Lato-Light',
  },
  speaker: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 10,
    margin: 5,
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#DDDDDD',
    shadowOpacity: 1,
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 65,
    height: 65,
  },
});

export default styles;
