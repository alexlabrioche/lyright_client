import axios from 'axios';

import {
  REQUEST_STARTED,
  REQUEST_FAIL,
  ADD_ACCESS_TOKEN,
  REMOVE_ACCESS_TOKEN,
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  token: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_STARTED:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_ACCESS_TOKEN:
      axios.defaults.headers.common['Authorization'] = payload;
      return {
        ...state,
        token: true,
      };
    case REMOVE_ACCESS_TOKEN:
      axios.defaults.headers.common['Authorization'] = null;
      return {
        ...state,
        token: false,
      };
    default:
      return state;
  }
}
