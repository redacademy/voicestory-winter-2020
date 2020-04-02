import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    width: '85%',
    maxHeight: 150,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 1,
  },
  contentbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datebox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: '100%',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  month: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  day: {
    fontSize: 20,
  },
  info: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: '100%',
    flex: 1,
  },
  details: {
    marginVertical: 5,
  },
  bigText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    fontSize: 12,
    color: 'white',
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    width: 70,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
