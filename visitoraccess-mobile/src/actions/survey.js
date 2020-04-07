import * as types from '../constants/actionTypes';
import * as endpoints from '../configs';

export const getSurvey = () => {
  return {
    endpoint: endpoints.survey,
    method: 'GET',
    types: [
      types.GET_SURVEY_REQUEST,
      types.GET_SURVEY_SUCCESS,
      types.GET_SURVEY_FAILURE,
    ],
  };
};

export const saveSurvey = () => {
  return {
    endpoint: endpoints.survey,
    method: 'POST',
    types: [
      types.SAVE_SURVEY_REQUEST,
      types.SAVE_SURVEY_SUCCESS,
      types.SAVE_SURVEY_FAILURE,
    ],
  };
};
