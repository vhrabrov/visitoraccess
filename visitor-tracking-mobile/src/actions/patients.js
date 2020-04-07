import * as types from '../constants/actionTypes';
import * as endpoints from '../configs';

export const getPatients = filters => {
  return {
    endpoint: endpoints.patients,
    method: 'POST',
    types: [
      types.GET_PATIENTS_REQUEST,
      types.GET_PATIENTS_SUCCESS,
      types.GET_PATIENTS_FAILURE,
    ],
    body: filters
  };
};

export const bookPatient = id => {
  return {
    endpoint: endpoints.bookPatient(id),
    method: 'PUT',
    types: [
      types.BOOK_PATIENT_REQUEST,
      types.BOOK_PATIENT_SUCCESS,
      types.BOOK_PATIENT_FAILURE,
    ]
  }
};

export const unbookPatient = id => {
  return {
    endpoint: endpoints.unbookPatient(id),
    method: 'PUT',
    types: [
      types.UNBOOK_PATIENT_REQUEST,
      types.UNBOOK_PATIENT_SUCCESS,
      types.UNBOOK_PATIENT_FAILURE,
    ]
  }
};
