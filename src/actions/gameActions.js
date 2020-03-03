import { ADD_ARTIST_ID, ADD_PLAYER } from './types';

export const addArtist = id => ({
  type: ADD_ARTIST_ID,
  payload: id,
});

export const addPlayer = player => ({
  type: ADD_PLAYER,
  payload: player,
});
