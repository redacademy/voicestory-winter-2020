import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF7EF',
  },
  main: {
    flex: 1,
    width: '100%',
    paddingLeft: 35,
    paddingRight: 35,
    justifyContent: 'flex-start',
    backgroundColor: '#FBF7EF',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato-Black',
  },
  user: {
    marginTop: 75,
  },
  emailContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  email: {
    fontFamily: 'Lato-Light',
    fontSize: 16,
  },

  edit: {
    color: '#507EA2',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
});
export default styles;
