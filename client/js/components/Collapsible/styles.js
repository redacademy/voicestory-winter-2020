import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  description: {
    lineHeight: 20,
    padding: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    backgroundColor: '#DB4F48',
    marginTop: 3,
    padding: 30,
    justifyContent: 'flex-start',
    alignContent: 'center',
  },
  title: {
    color: '#FBF7EF',
    fontSize: 15,
    flex: 1,
  },
  icon: {
    color: '#FBF7EF',
    textShadowOffset: {width: 2, height: 2},
    textShadowColor: '#9F3833',
    textShadowRadius: 1,
  },
  descriptionContainer: {
    backgroundColor: '#FBF7EF',
  },
  position: {
    width: '95%',
  },
});

export default styles;
