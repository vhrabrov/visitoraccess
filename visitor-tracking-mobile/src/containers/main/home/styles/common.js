import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    height: 220,
    backgroundColor: 'white',
  },
  patientInfoScroll: {
    flex: 1,
    paddingHorizontal: '7%',
    justifyContent: 'center',
  },
  patientName: {
    marginVertical: 15,
  },
  patientFloor: {
    marginVertical: 15,
  },
  patientsListContent: {
    paddingVertical: 1,
    flexGrow: 1
  },
  patientsList: {
    flex: 1,
  },
  patientCard: {
    marginVertical: 2
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  emptyText: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold'
  },
  modalText: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
});
