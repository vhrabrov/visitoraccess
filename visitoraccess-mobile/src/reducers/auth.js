import * as types from '../constants/actionTypes';

let initialState = {
  fetchingLogin: false,
  token: null,
  errorCode: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        fetchingLogin: true,
        errorCode: null
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        fetchingLogin: false,
        errorCode: null
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        fetchingLogin: false,
        errorCode: action.errorCode,
      };
    }

    case types.SET_TOKEN: {
      return {
        ...state,
        token: action.token
      }
    }

    case types.LOGOUT:
      return {
        ...state,
        token: null,
      }

    default:
      return state;
  }
};

export default auth;
