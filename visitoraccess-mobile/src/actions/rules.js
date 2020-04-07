import * as types from '../constants/actionTypes';
import * as endpoints from '../configs';

export const getRules = () => {
  return {
    endpoint: endpoints.rules,
    method: 'GET',
    types: [
      types.GET_RULES_REQUEST,
      types.GET_RULES_SUCCESS,
      types.GET_RULES_FAILURE,
    ],
  };
};
