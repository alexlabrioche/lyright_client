import {
  REQUEST_SUCCESS_NEW_GAME,
  REQUEST_SUCCESS_JOIN,
  REQUEST_SUCCESS_PSEUDO,
  REQUEST_SUCCESS_LYRICS,
} from '../actions/types';

const initialState = {
  host: null,
  pseudo: '',
  code: '',
  gameData: null,
  score: {},
  round: 0,
  isInitialized: false,
  suggestedPseudo: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_SUCCESS_NEW_GAME:
      return {
        ...state,
        code: payload.data.code,
        pseudo: payload.data.pseudo,
        isInitialized: true,
        host: true,
      };
    case REQUEST_SUCCESS_JOIN:
      return {
        ...state,
        code: payload.data.code,
        pseudo: payload.data.pseudo,
        isInitialized: true,
        host: false,
      };
    case REQUEST_SUCCESS_LYRICS:
      return {
        ...state,
        gameData: payload.data,
      };
    case REQUEST_SUCCESS_PSEUDO:
      return {
        ...state,
        suggestedPseudo: payload.data,
      };
    default:
      return state;
  }
}
