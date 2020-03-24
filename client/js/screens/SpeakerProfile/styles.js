import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f0ea',
  },
  banner: {
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    padding: 30,
  },
  bigtext: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  lighttext: {
    fontFamily: 'Lato-Light',
    fontSize: 18,
  },
  socials: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  email: {
    marginBottom: 2,
  },
  iconbox: {
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  scroll: {
    paddingLeft: 30,
  },
});

export default styles;
