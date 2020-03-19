import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
