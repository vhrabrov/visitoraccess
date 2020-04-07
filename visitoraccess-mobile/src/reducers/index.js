import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

import auth from './auth';
import patients from './patients';
import survey from './survey';
import rules from './rules';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['errorCode'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  patients,
  rules,
  survey,
});
