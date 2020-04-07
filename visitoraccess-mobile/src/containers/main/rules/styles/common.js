import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scroll: {
    paddingHorizontal: '7%',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  rules: {
    flex: 1,
  },
  survey: {
    flex: 1,
  },
  list: {
    width: '100%',
    height: '100%',
  },
  rulesTitle: {
    marginTop: 10,
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
