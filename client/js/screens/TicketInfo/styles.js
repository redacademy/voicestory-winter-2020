import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  ticket: {
    backgroundColor: '#FBF7EF',
  },
  imageContainer: {
    height: 135,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 25,
  },
  image: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  icon: {
    width: 45,
    height: 50,
    resizeMode: 'contain',
    marginRight: 20,
  },
  speakerCard: {
    height: 150,
    width: 100,
    marginRight: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Lato-Black',
    fontSize: 25,
  },
  eventtitle: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Lato-Light',
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '100%',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ticketInfoContainer: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
  },
  infoSections: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  date: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  time: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
  },
  location: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  address: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
  },
  price: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  tax: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
  },
  info: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  aboutContainer: {
    backgroundColor: '#F4F0E8',
    paddingLeft: 40,
    paddingRight: 40,
  },
  aboutTitle: {
    paddingTop: 30,
    paddingBottom: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  about: {
    lineHeight: 20,
  },
  speakerContainer: {
    paddingBottom: 40,
  },
  speakerTitle: {
    paddingTop: 30,
    paddingBottom: 10,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
});

export default styles;
