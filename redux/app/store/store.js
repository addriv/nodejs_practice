import {createStore, applyMiddleware, compose} from 'redux';
import {AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist';
import logger from 'redux-logger';
import todosReducer from '../reducers/todos_reducer';

// const composeFn = 

export const configureStore = (initialState) => { 
  const store = createStore(todosReducer, initialState,  compose(applyMiddleware(logger), autoRehydrate()));
  persistStore(store, {storage: AsyncStorage});
  return store;
};
    
    