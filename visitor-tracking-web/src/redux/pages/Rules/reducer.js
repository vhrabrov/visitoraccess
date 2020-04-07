import {
  GET_QUESTIONS,
  GET_RULES,
} from '../../../constants/constants';

export const initialState = {
  questions: [],
  rules: [],
};

export const testDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
      };
    case GET_RULES:
      return {
        ...state,
        rules: payload,
      };
    default:
      return state;
  }
};
