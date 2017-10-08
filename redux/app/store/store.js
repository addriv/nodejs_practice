import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todosReducer from '../reducers/todos_reducer';

export const configureStore = (initialState) => (
  createStore(todosReducer, initialState, applyMiddleware(logger))
);
