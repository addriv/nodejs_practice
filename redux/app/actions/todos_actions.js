export const RECEIVE_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'DELETE_TODO';

export const createTodo = text => {
  return {
    type: RECEIVE_TODO,
    text
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};