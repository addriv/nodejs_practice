import {connect} from 'react-redux';
import TodoItem from './todo_item';
import {removeTodo} from '../actions/todos_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);