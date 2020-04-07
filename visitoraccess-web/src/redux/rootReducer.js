import { combineReducers } from 'redux';

import { authReducer as auth } from './pages/Login/reducer';
import { testDataReducer as testData } from './pages/Rules/reducer';

export default combineReducers({
  auth,
  testData,
});
