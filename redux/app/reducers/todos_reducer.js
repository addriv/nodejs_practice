import uuid from 'uuid';
import {RECEIVE_TODO, REMOVE_TODO} from '../actions/todos_actions';

const _defaultState = {
  todos: []
};

const Main = (state=_defaultState, action) => {
  Object.freeze(state);
  let newTodos;
  switch (action.type){
    case RECEIVE_TODO:
      newTodos = [
        ...state.todos,
        {
          text: action.text,
          id: uuid.v4()
        }
      ];
      
      return {
        todos: newTodos
      };
    case REMOVE_TODO:
      newTodos = state.todos.filter(todo => todo.id !== action.id);
      return {
        todos: newTodos
      };
    default:
      return state; 
  }
};

export default Main;