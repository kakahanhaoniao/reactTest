import {connect} from 'react-redux';
import {toggleTodo} from '../action';
import VisibleTodoList from '../Components/Todo/visibleTodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETE':
      return todos.map(t => t.complete);
    case 'SHOW_ACTIVE':
      return todos.map(t => !t.complete);
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.fileter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    todoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
}
const ToggleTodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);

export default ToggleTodoApp;
