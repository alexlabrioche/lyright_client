import {
  REQUEST_SUCCESS_NEW_GAME,
  REQUEST_SUCCESS_PSEUDO,
  REQUEST_SUCCESS_LOGIN,
  LOGOUT,
} from '../actions/types';

const initialState = {
  isAuth: true,
  connected: {
    id: '8412a0b0-9f0e-477e-a5d6-ae84c10e7a3a',
    name: 'jeSappelChiant',
    email: 'jesappel@chiant.com',
  },
  guest: {},
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_SUCCESS_LOGIN:
      return {
        ...state,
        isAuth: true,
        connected: payload.data,
      };
    case REQUEST_SUCCESS_PSEUDO:
      return {
        ...state,
        guest: { ...state.guest, pseudo: payload.data },
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        connected: {},
      };
    default:
      return state;
  }
}
