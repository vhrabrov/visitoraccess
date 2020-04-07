import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 45,
    width: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  link: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
  },
});
