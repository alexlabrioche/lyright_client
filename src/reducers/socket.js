import { INIT_SOCKET_IO } from '../actions/types';

const initialState = {
  socket: {},
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case INIT_SOCKET_IO:
      return {
        ...state,
        socket: payload,
      };
    default:
      return state;
  }
}
