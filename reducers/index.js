import todo from './todo';
import setVisibility from './setvisibility';
import { combineReducers } from 'redux';

export const todoApp = combineReducers({
  todo,
  setVisibility
})
