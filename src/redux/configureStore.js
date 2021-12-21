import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import modelReducer from './modelReducer';
import carReducer from './oneCarReducer';
import reserveReducer from './reserveReducer';

const reducer = combineReducers({
  myModels: modelReducer,
  myCar: carReducer,
  myReservations: reserveReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
