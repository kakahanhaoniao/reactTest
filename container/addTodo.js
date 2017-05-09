import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../action'
class AddTodo extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const node = this.refs.input
    const text = node.value.trim()
    if (text) {
      debugger;
      this.props.dispatch(addTodo(node.value));
      node.value = ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" ref="input" />
          <button>
            Add
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAddSubmit: PropTypes.func.isRequired
}


const AddTodoApp = connect()(AddTodo);

export default AddTodoApp;
