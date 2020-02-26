import {
  REQUEST_STARTED,
  REQUEST_FAIL,
  REQUEST_SUCCESS_ARTISTS,
  REQUEST_SUCCESS_ARTIST_DETAILS,
  REQUEST_SUCCESS_SONGS,
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  artists: [],
  artistDetails: {},
  songsFromArtist: [],
};

export default function apiRequest(state = initialState, { type, payload }) {
  console.log('☘️', type);
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
    case REQUEST_SUCCESS_ARTISTS:
      return {
        ...state,
        loading: false,
        error: null,
        artists: payload.data,
      };
    case REQUEST_SUCCESS_ARTIST_DETAILS:
      return {
        ...state,
        loading: false,
        error: null,
        artistDetails: payload.data,
      };
    case REQUEST_SUCCESS_SONGS:
      return {
        ...state,
        loading: false,
        error: null,
        songsFromArtist: payload.data,
      };

    default:
      return state;
  }
}
