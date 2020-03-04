import {
  REQUEST_SUCCESS_PSEUDO,
  REQUEST_SUCCESS_LOGIN,
  LOGOUT,
} from '../actions/types';

const initialState = {
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
