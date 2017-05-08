const ADDTODO = 'ADD_TODO';
const SETVISIBILITY = 'SET_VISIBILITY';
const TOGGLETODO = "TOGGLE_TODO";

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        complete: false
      }
    case TOGGLETODO:
      if(state.id !== action.id) {
        return state;
      }
      return object.assign({}, state, {
        complete: !state.complete
      })
    default:
      return state;
  }
}


export const todos = (state,action) => {
  debugger;
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo(undefined, action);
      }
    case TOGGLETODO:
      state.map((t) => todo(t, action));
    default:
      return state;
  }
}



// case SETVISIBILITY:
// return object.assign({}, state, {
//   complete: action.filter
// });
