import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  radioText: {
    marginLeft: 20,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#3740ff',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});
