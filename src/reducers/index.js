import { combineReducers } from 'redux';
import api from './api';
import artists from './artists';
import user from './user';
import game from './game';

export default combineReducers({
  api,
  artists,
  user,
  game,
});
