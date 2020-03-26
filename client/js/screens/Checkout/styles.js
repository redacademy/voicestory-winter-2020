import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    height: 135,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FBF7EF',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    paddingLeft: 30,
    paddingTop: 30,
    backgroundColor: '#FBF7EF',
  },
  image: {
    width: Dimensions.get('window').width,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default styles;
