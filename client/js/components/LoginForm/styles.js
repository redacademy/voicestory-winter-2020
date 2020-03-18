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
    backgroundColor: 'darkred',
    padding: 5,
    marginVertical: 5,
    borderRadius: 10,
    borderBottomWidth: 0,
  },
  input: {
    color: 'white',
  },
  placeholder: {
    color: 'white',
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
    width: 330,
    backgroundColor: '#D84F48',
    borderRadius: 10,
    paddingVertical: 15,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default styles;
