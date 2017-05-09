import todo from './todo';
import setVisibility from './setvisibility';
import { combineReducers } from 'redux';

const todoApp = combineReducers({
  todo,
  setVisibility
})

export default todoApp;
