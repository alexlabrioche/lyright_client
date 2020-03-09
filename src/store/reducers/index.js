import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import { combineReducers } from 'redux';

import api from './api';
import artists from './artists';
import user from './user';
import game from './game';
import socket from './socket';

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  api,
  artists,
  user,
  game,
  socket,
});
