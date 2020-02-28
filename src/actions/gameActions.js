import { ADD_HOST_ID, ADD_ARTIST_ID, ADD_SECRET_CODE } from './types';

export const addHost = id => ({
  type: ADD_HOST_ID,
  payload: id,
});

export const addArtist = id => ({
  type: ADD_ARTIST_ID,
  payload: id,
});

export const addSecretCode = code => ({
  type: ADD_SECRET_CODE,
  payload: code,
});

// const baseUrl = process.env.REACT_APP_API_BASE_URL;

// export const gameActions = () => {
//   return dispatch => {};
// };
