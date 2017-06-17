import { combineReducers } from 'redux';

import characters from './characters_reducer';
import heroes from './heroes_reducer';

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;