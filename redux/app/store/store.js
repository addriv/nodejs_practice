import { createStore } from 'redux';
import todosReducer from '../reducers/todos_reducer';

export const configureStore = (initialState) => (
  createStore(todosReducer, initialState)
);
