import { combineReducers } from 'redux';
import api from './api';
import artists from './artists';
import user from './user';

export default combineReducers({
  api,
  artists,
  user,
});
