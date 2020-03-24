import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBF7EF',
    height: '100%',
    padding: 30,
    paddingBottom: 50,
  },
  heading: {
    color: '#1D1D1D',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginBottom: 15,
  },
  text: {
    color: '#1D1D1D',
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    lineHeight: 25,
    marginBottom: 30,
  },
  additional: {
    color: '#1D1D1D',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginBottom: 15,
    marginTop: 30,
  },
  emailContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  link: {
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    color: '#507EA2',
    textAlign: 'center',
  },
  website: {
    color: '#507EA2',
    transform: [{translateY: 4}],
    marginLeft: 10,
  },
  websiteContainer: {
    marginBottom: 15,
    flexDirection: 'row',
  },
});

export default styles;
