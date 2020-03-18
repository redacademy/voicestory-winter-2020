import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  container: {
    height: Dimensions.get('window').height * 0.55,
    width: Dimensions.get('window').width,
    backgroundColor: '#1d1d1d',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  player: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginLeft: 30,
  },
  backgroundVideo: {
    height: '70%',
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
    paddingTop: 20,
    color: '#fbf7ef',
  },
  infoContainer: {
    paddingTop: 20,
    alignItems: 'center',
    height: '30%',
  },
  info: {
    width: Dimensions.get('window').width - 60,
  },
  actionContainer: {
    paddingTop: 20,
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 12,
  },
});

export default styles;
