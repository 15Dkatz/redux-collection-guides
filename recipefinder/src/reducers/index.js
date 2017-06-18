import { combineReducers } from 'redux';
import { SET_RECIPES } from '../actions';

function recipes(state = [], action) {
  switch(action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ recipes });

export default rootReducer;