import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    height: 135,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FBF7EF',
  },
  ticketInfoContainer: {
    backgroundColor: '#FBF7EF',
  },
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    paddingTop: 30,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: '#F4F0E8',
  },
  image: {
    width: Dimensions.get('window').width,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  day: {
    position: 'absolute',
    color: '#FBF7EF',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    top: '30%',
    left: '18%',
  },
  ticketinfo: {
    flexDirection: 'row',
    margin: 30,
  },
  icon: {
    width: 45,
    height: 35,
    marginRight: 20,
  },
  ticketSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 30,
  },
  border: {
    borderBottomColor: '#8C8C8C',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  bold: {
    fontFamily: 'Lato-Bold',
  },
  light: {
    fontFamily: 'Lato-Light',
  },
  paymentForm: {
    backgroundColor: '#DB4F48',
    width: 350,
    borderRadius: 10,
    alignSelf: 'center',
  },
  formPadding: {
    margin: 20,
  },
  inputPadding: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#9F3833',
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Lato-Light',
  },
  rightInputPadding: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#9F3833',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    flex: 1,
    fontFamily: 'Lato-Light',
  },
  leftInputPadding: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#9F3833',
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    flex: 1,
    fontFamily: 'Lato-Light',
  },
  halfInput: {
    flexDirection: 'row',
  },
  checkoutlabel: {
    color: '#FBF7EF',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  paymenttype: {
    color: '#FBF7EF',
    fontFamily: 'Lato-Light',
    fontSize: 16,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  typeContainer: {
    flexDirection: 'row',
  },
  label: {
    marginLeft: 30,
    marginTop: 25,
  },
  payment: {
    margin: 30,
  },
  button: {
    alignSelf: 'center',
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    marginBottom: 0,
  },
  servicecharge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    borderBottomColor: '#8C8C8C',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 10,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30,
    marginTop: 0,
  },
  checkoutContainer: {
    paddingBottom: 75,
  },
  dropdownContainer: {
    transform: [{translateX: 50}, {translateY: -5}],
  },
  dropdown: {
    backgroundColor: '#507EA2',
    width: 50,
    borderRadius: 10,
  },
  unit: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  selectedValueContainer: {
    height: 30,
    width: 50,
    backgroundColor: '#507EA2',
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  selectedValue: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default styles;
