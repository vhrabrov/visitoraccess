import {
  GET_QUESTIONS,
  GET_RULES,
} from '../../../constants/constants';


export const getRules = payload => ({
  type: GET_RULES,
  payload,
});

export const getQuestions = payload => ({
  type: GET_QUESTIONS,
  payload,
});