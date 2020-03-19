import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  form: {
    alignSelf: 'center',
    width: '90%',
    padding: 20,
    marginBottom: 20,
  },
  formcontent: {
    backgroundColor: '#D84F48',
    padding: 10,
    borderRadius: 10,
  },
  textinput: {
    backgroundColor: '#9F3833',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderBottomWidth: 0,
    fontFamily: 'Lato-Regular',
  },
  buttonbox: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 150,
    backgroundColor: '#D84F48',
    borderRadius: 10,
    paddingVertical: 15,
  },
  buttonLogin: {
    marginTop: 35,
    width: 340,
    backgroundColor: '#D84F48',
    borderRadius: 10,
    paddingVertical: 15,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
