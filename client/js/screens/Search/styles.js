import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    color: '#FBF7EF',
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    flex: 2,
    textAlign: 'center',
    transform: [{translateX: 20}, {translateY: 25}],
  },
  headerContainer: {
    backgroundColor: '#DB4F48',
    flexDirection: 'row',
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
    marginRight: 20,
  },
  border: {
    borderBottomColor: '#DB4F48',
    borderBottomWidth: 3,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
  resultheader: {
    color: '#DB4F48',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default styles;
