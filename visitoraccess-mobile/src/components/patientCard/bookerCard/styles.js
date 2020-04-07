import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '$whiteGrey',
    borderRadius: 5,
    alignItems: 'center',
    paddingEnd: 10,
  },
  icon: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  time: {
    flex: 1,
    fontWeight: 'bold',
  },
});
