import React, {Component, PropTypes} from 'react';
import AddTodoApp from '../../container/addTodo';
import ToggleTodoApp from '../../container/visibleTodoList';
import Footer from './footer';
class App extends Component {
  render () {
    return (
      <div>
        <AddTodoApp />
        <ToggleTodoApp />
        <Footer />
      </div>
    )
  }
}

export default App;
