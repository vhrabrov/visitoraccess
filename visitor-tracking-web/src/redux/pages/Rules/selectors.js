import { createSelector } from 'reselect';

const rootSelector = state => state.testData;

export const selectQuestions = createSelector(
  [rootSelector],
  state => state.questions,
);

export const selectRules = createSelector(
  [rootSelector],
  state => state.rules,
);
