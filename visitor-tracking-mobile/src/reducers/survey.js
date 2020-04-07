import * as types from '../constants/actionTypes';

const MOCK_SURVEY = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    positiveAnswer: false,
  },
  {
    id: 2,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    positiveAnswer: false,
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    positiveAnswer: false,
  },
]

let initialState = {
  // survey: MOCK_SURVEY,
  survey: [],
  error: null,
  isFetching: false,
};

const rules = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_SURVEY_REQUEST:
    case types.GET_SURVEY_REQUEST:
      return {
        ...state,
        isFetching: true,
        survey: []
      };
    case types.SAVE_SURVEY_FAILURE:
    case types.GET_SURVEY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case types.SAVE_SURVEY_SUCCESS:
    case types.GET_SURVEY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        survey: action.result.questions,
      };
    default:
      return state;
  }
};

export default rules;
