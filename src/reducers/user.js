import {
  REQUEST_SUCCESS_NEW_GAME,
  REQUEST_SUCCESS_PSEUDO,
} from '../actions/types';

const initialState = {
  isAuth: true,
  connected: {
    id: "je suis une ID d'un joueur connecté lolz",
  },
  guest: {},
  code: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_SUCCESS_NEW_GAME:
      return {
        ...state,
        code: payload.data,
      };
    case REQUEST_SUCCESS_PSEUDO:
      return {
        ...state,
        guest: { ...state.guest, pseudo: payload.data },
      };
    default:
      return state;
  }
}
