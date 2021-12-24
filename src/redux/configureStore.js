import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import modelReducer from './modelReducer';
import carReducer from './oneCarReducer';
import reserveReducer from './reserveReducer';
import banCarReducer from './banCarReducer';

const reducer = combineReducers({
  myModels: modelReducer,
  myCar: carReducer,
  myReservations: reserveReducer,
  myBan: banCarReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
