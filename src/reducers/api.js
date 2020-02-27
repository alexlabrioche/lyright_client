import { REQUEST_STARTED, REQUEST_FAIL } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
