import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerimg: {
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  box: {
    width: 200,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textbox: {
    marginLeft: 20,
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigtext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    padding: 20,
  },
});

export default styles;
