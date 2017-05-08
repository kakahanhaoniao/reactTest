import {connect} from 'react-redux';
import {toggleTodo} from '../action';
import visibleTodoList from '../Components/Todo/visibleTodoList';

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
    todos: getVisibleTodos(state.todos, state.fileter);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    click: (id) => {
      dispatch(toggleTodo(id));
    }
  }
}
export toggleTodoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(visibleTodoList);
