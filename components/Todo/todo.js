import React, {Component, PropTypes} from 'react';
class Todo extends Component {
  render () {
    const {key, onclick, complete, text} = this.props;
    return (
      <li
        onclick={onclick}
        style={{textDecoration:complete? 'line-through' : 'none'}}>
        {text}
      </li>
    )
  }
}
export default Todo;
