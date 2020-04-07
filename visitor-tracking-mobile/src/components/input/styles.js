import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
  },
  label: {
    paddingStart: 10,
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '$whiteGrey',
    paddingStart: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});
