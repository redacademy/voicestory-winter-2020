import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  themeContainer: {
    width: Dimensions.get('window').width,
    marginTop: 30,
  },
  themeButton: {
    height: 150,
    width: 150,
    margin: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
