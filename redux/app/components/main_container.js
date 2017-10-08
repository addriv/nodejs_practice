import {connect} from 'react-redux';
import Main from './Main';
import {createTodo} from '../actions/todos_actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);