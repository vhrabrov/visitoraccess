import * as types from '../constants/actionTypes';

let initialState = {
  rules: [],
  error: null,
  isFetching: false,
};

const rules = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_RULES_REQUEST:
      return {
        ...state,
        isFetching: true,
        rules: []
      };
    case types.GET_RULES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case types.GET_RULES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        rules: action.result.rules,
      };
    default:
      return state;
  }
};

export default rules;
