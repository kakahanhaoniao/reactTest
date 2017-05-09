import React, {Component, PropTypes} from 'react';
import Todo from './todo';
class VisibleTodoList extends Component {
  render () {
    const {todos, todoClick} = this.props;
    if(!todos || !todos.length ) {
        return (<div>no data</div>);
    }
    return (
      <ul>
        {todos.map(todo => (
          <Todo
            key = {todo.id}
            {...todo}
            onclick={() => todoClick(todo.id)} />
        ))}
      </ul>
    )
  }
}
export default VisibleTodoList;
