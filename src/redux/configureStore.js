import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import modelReducer from './modelReducer';

const reducer = combineReducers({
  myModels: modelReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
