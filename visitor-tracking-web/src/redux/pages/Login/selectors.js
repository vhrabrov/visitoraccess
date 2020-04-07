import { createSelector } from 'reselect';

const rootSelector = state => state.auth;

export const selectIsAuth = createSelector(
  [rootSelector],
  state => state.isAuth,
);

export const selectAuthError = createSelector(
  [rootSelector],
  state => state.error,
);
