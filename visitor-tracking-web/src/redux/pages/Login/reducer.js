import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  CLEAR_AUTH_FAIL,
  LOGOUT,
} from '../../../constants/constants';

export const initialState = {
  isAuth: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
      };
    case AUTH_FAIL:
      return {
        ...state,
        error: action.error,
      };
    case CLEAR_AUTH_FAIL:
      return {
        ...state,
        error: null,
      };
    case LOGOUT:
      return {
        ...initialState,
        isAuth: false,
      };
    default:
      return state;
  }
};
