import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
    paddingTop: 200,
    paddingBottom: 150,
    backgroundColor: '#FBF7EF',
  },
  toggleContainer: {
    width: 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  formToggle: {
    fontSize: 18,
  },
  underline: {
    fontSize: 18,
    fontWeight: '500',
  },
  borderBottom: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#DB4F48',
  },
});

export default styles;
