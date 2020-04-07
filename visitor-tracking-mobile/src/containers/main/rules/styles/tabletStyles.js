import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 60,
    paddingLeft: 60,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  landScroll: {
    flex: 1,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rules: {
    flex: 2,
    paddingRight: 46,
  },
  survey: {
    flex: 2,
    paddingLeft: 46,
  },
  modalView: {
    flex: 1,
    width: 380,
    height: 380,
  },
  landModalView: {
    left: '40%',
  },
  portraitModalView: {
    left: '25%',
  },
});
