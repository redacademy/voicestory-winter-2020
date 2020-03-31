import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#1d1d1d',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  videoContainer: {
    height: Dimensions.get('window').height * 0.35,
  },
  loadingContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fbf7ef',
  },
  speakerName: {
    fontWeight: '300',
    fontSize: 14,
    color: '#fbf7ef',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  info: {
    width: Dimensions.get('window').width - 60,
    transform: [{translateY: -50}],
  },
  actionContainer: {
    paddingTop: 20,
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    alignItems: 'center',
    transform: [{translateY: -50}],
  },
  icon: {
    paddingRight: 12,
  },
});

export default styles;
