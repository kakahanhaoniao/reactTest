const ADDTODO = 'ADD_TODO';
const SETVISIBILITY = 'SET_VISIBILITY';
const TOGGLETODO = "TOGGLE_TODO";

let nextId = 0;

export const addTodo = (text) => {
    debugger;
    return {
      type: ADDTODO,
      id: ++nextId,
      text
    }
}


export const setVisibility = (filter) => {
  return {
    type: SETVISIBILITY,
    filter
  }
}


export const toggleTodo = (id) => {
  return {
    type: TOGGLETODO,
    id
  }
}
