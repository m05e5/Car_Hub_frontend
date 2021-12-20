import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import modelReducer from './modelReducer';
import carReducer from './oneCarReducer';

const reducer = combineReducers({
  myModels: modelReducer,
  myCar: carReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
