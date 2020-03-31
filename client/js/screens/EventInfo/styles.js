import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  eventcontainer: {
    backgroundColor: '#f5f0ea',
  },
  headerimg: {
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  infobox: {
    marginVertical: 20,
    width: 220,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 45,
    height: 50,
    resizeMode: 'contain',
    marginRight: 20,
    transform: [{translateY: -5}],
  },
  iconbox: {
    width: 43,
    height: 36,
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.2,
  },
  textbox: {
    marginLeft: 20,
  },
  details: {
    backgroundColor: '#FBF7EF',
    paddingVertical: 30,
    paddingHorizontal: 50,
  },
  bigtext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boldtext: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lighttext: {
    fontFamily: 'Lato-Light',
    fontSize: 12,
  },
  aboutcontainer: {
    backgroundColor: '#f5f0ea',
  },
  about: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  abouttext: {
    marginBottom: 30,
    fontWeight: '400',
    lineHeight: 23,
  },
  speakercard: {
    height: 150,
    width: 100,
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    marginRight: 20,
    marginBottom: 20,
  },
  scroll: {
    paddingLeft: 30,
  },
  speakercontainer: {
    height: 175,
    width: '100%',
  },
  buyticketbtn: {
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB4F48',
    width: '86%',
    borderRadius: 10,
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    marginHorizontal: 30,
  },
  buytext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  day: {
    position: 'absolute',
    color: '#FBF7EF',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    top: '35%',
    left: '28%',
  },
});

export default styles;
