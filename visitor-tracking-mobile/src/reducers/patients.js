import * as types from '../constants/actionTypes';

let initialState = {
  patients: [],
  loading: false,
  bookingSuccess: null,
  error: null
};

const patients = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PATIENTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.GET_PATIENTS_SUCCESS:
      return {
        ...state,
        patients: action.result.content,
        loading: false
      }
    case types.GET_PATIENTS_FAILURE:
      return {
        ...state,
        loading: false
      }

    case types.BOOK_PATIENT_REQUEST: {
      return {
        ...state,
        bookingSuccess: null
      }
    }

    case types.BOOK_PATIENT_SUCCESS:
      return {
        ...state,
        bookingSuccess: true
      };
    case  types.BOOK_PATIENT_FAILURE: {
      return {
        ...state,
        bookingSuccess: false
      }
    }
    case types.UNBOOK_PATIENT_REQUEST: {
      return {
        ...state,
        bookingSuccess: null
      }
    }
    case types.UNBOOK_PATIENT_SUCCESS: {
      return {
        ...state,
        bookingSuccess: true
      }
    }
    case types.UNBOOK_PATIENT_FAILURE: {
      return {
        ...state,
        bookingSuccess: false
      }
    }
    default:
      return state;
  }
};

export default patients;
