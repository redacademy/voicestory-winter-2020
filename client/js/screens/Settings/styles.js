import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF7EF',
    height: Dimensions.get('window').height,
  },
  heading: {
    color: '#1D1D1D',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  border: {
    borderBottomColor: '#DB4F48',
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default styles;
