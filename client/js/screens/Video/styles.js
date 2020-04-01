import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#FBF7EF',
  },
  addedToFaves: {
    width: Dimensions.get('window').width,
    backgroundColor: 'rgb(173, 75, 67)',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
  },

  addText: {
    color: '#fbf7ef',
    fontSize: 18,
    marginHorizontal: 10,
  },
  imageContainer: {
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    height: Dimensions.get('window').height * 0.25,
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25,
    position: 'relative',
  },
  play: {
    backgroundColor: '#3c3c3c',
    height: 70,
    width: 70,
    borderRadius: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 40,
    bottom: -25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  speakerName: {
    fontWeight: '300',
    fontSize: 14,
    paddingTop: 20,
  },
  info: {
    width: Dimensions.get('window').width - 60,
    justifyContent: 'center',
  },
  videoTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
  },
  videoActions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  videoLength: {
    color: 'rgb(130,130,130)',
  },
  divider: {
    borderColor: 'rgb(130,130,130)',
    marginHorizontal: 10,
    borderStyle: 'solid',
    borderRightWidth: 1,
    width: 0,
    height: 10,
  },
  icon: {marginHorizontal: 2},

  description: {
    paddingTop: 20,
    lineHeight: 22,
  },
  externalLinks: {
    paddingVertical: 30,
    backgroundColor: '#Fbf7ef',
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  speakerContainer: {
    width: Dimensions.get('window').width - 60,
  },
  speaker: {
    fontSize: 18,
    fontWeight: '600',
  },
  speakerCardContainer: {
    paddingTop: 20,
  },
  speakerCard: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  watchNextContainer: {
    padding: 20,
  },
});

export default styles;
