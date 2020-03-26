import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    backgroundColor: '#F4F0E8',
  },
  indicator: {
    transform: [{translateY: -100}],
  },
});

export default styles;
