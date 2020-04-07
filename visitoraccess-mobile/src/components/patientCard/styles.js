import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 5,
  },
  cardContent: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingEnd: '7%',
  },
  indicatorContainer: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  name: {
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bookerCardContainer: {
    paddingStart: '10%',
    paddingEnd: '7%',
  },
});
