import {connect} from 'react-redux';
import {addTodo} from '../action'

let addTodoApp = ({dispatch}) => {
  debugger;
  let input;
  return (
    <div>
      <form onsubmit={
        e => {
          e.preventDefault();
          if(!input.value.trim()) return;
          dispatch(addTodo(input.value));
          input.value = '';
        }
      }>
        <input ref={node => {
          console.log(node);
          debugger;
          input=node;
        }}/>
        <button >
          点我
        <button />
      </form>
    </div>
  )
}

export addTodoApp = connect()(addTodoApp);
