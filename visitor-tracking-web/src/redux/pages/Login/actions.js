import api from '../../../api';
import { clearStorage, TOKEN_KEY } from '../../../utils';
import { browserHistory } from '../../../browserHistory';

import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  CLEAR_AUTH_FAIL,
  LOGOUT,
} from '../../../constants/constants';
export const authSuccess = () => dispatch => {
  dispatch({
    type: AUTH_SUCCESS,
  });
};

export const authFail = error => ({
  type: AUTH_FAIL,
  error,
});

export const clearAuthFail = () => ({
  type: CLEAR_AUTH_FAIL,
});

export const loginUser = credentials => dispatch => {
  const creds = `${credentials.username}:${credentials.password}`;
  const encodeCreds = window.btoa(creds);
  localStorage.setItem(TOKEN_KEY, encodeCreds);

  api.auth.login()
    .then(() => {
      dispatch(authSuccess());
      browserHistory.push('/');
    })
    .catch(() => {dispatch(authFail(true))});
};

export const initializeApp = () => dispatch => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(authSuccess());
  } else {
    clearStorage();
    dispatch({ type: LOGOUT });
    browserHistory.push('/login');
  }
};

export const logoutUser = () => dispatch => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    return;
  }
  clearStorage();
  dispatch({ type: LOGOUT });
  browserHistory.push('/login');
};
