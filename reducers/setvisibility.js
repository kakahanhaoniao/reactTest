const ADDTODO = 'ADD_TODO';
const SETVISIBILITY = 'SET_VISIBILITY';
const TOGGLETODO = "TOGGLE_TODO";
export const setVisibility =  (state='SHOW_ALL', action) => {
  switch(action.type) {
    case SETVISIBILITY: 
      return action.filter
    default:
      return state
  }
}
