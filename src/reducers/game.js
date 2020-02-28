import { ADD_HOST_ID, ADD_ARTIST_ID, ADD_SECRET_CODE } from '../actions/types';

const initialState = {
  host: '',
  code: '',
  artists: [],
  score: {},
  round: 0,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_HOST_ID:
      return {
        ...state,
        host: payload,
      };
    case ADD_ARTIST_ID:
      state.artists.length <= 1 && state.artists.push({ artist: payload });
      return {
        ...state,
      };
    case ADD_SECRET_CODE:
      return {
        ...state,
        code: payload,
      };
    default:
      return state;
  }
}
