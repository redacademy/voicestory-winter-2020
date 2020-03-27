import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#FBF7EF',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    alignSelf: 'center',
    transform: [{translateY: -10}],
  },
  headerContainer: {
    backgroundColor: '#DB4F48',
    height: 100,
  },
  heading: {
    color: '#FBF7EF',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  contentContainer: {
    backgroundColor: '#9F3833',
    paddingRight: 30,
    paddingLeft: 30,
  },
  close: {
    marginLeft: 15,
  },
  border: {
    borderBottomColor: '#DB4F48',
    borderBottomWidth: 3,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
});

export default styles;
