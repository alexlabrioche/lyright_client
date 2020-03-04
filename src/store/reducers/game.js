import {
  ADD_ARTIST_ID,
  REQUEST_SUCCESS_NEW_GAME,
  ADD_PLAYER,
} from '../actions/types';

const initialState = {
  host: '',
  code: '',
  artists: [],
  score: {},
  round: 0,
  isInitialized: false,
  players: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_SUCCESS_NEW_GAME:
      const { code, userId } = payload.data;
      return {
        ...state,
        code: code,
        host: userId,
        isInitialized: true,
      };
    case ADD_ARTIST_ID:
      state.artists.length <= 1 && state.artists.push({ artist: payload });
      return {
        ...state,
      };
    case ADD_PLAYER:
      state.players.push(payload);
      return {
        ...state,
      };
    default:
      return state;
  }
}
