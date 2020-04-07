import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer';
import { initialState as auth } from './redux/pages/Login/reducer';
import { initialState as testData } from './redux/pages/Rules/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  auth,
  testData,
};

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);


export default createStore(
  persistedReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk)),
);
