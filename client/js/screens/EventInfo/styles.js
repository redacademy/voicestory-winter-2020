import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  eventcontainer: {
    backgroundColor: '#F5F0EA',
  },
  shadow: {
    shadowOffset: {width: 1, height: 5},
    shadowColor: '#000',
    shadowOpacity: 0.2,
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
    alignSelf: 'center',
  },
  iconbox: {
    width: 43,
    height: 36,
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
    marginRight: 20,
    marginBottom: 20,
    shadowRadius: 5,
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
    marginHorizontal: 30,
  },
  buytext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dimmed: {
    height: '100%',
    backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
  },
  modalbox: {
    maxHeight: 210,
    width: 320,
    backgroundColor: '#FBF7EF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 300,
    borderRadius: 20,
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 14,
  },
  iconbtn: {
    alignSelf: 'flex-end',
  },
  modaltext: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    width: 240,
  },
  continuebtn: {
    marginTop: 40,
    marginBottom: 20,
    height: 55,
    width: 260,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB4F48',
  },
});

export default styles;
