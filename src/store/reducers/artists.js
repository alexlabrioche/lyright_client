import {
  REQUEST_SUCCESS_ARTISTS,
  REQUEST_SUCCESS_ARTIST_DETAILS,
  REQUEST_SUCCESS_SONGS,
  REQUEST_SUCCESS_SONG_DETAILS,
} from '../actions/types';

const initialState = {
  artistsList: [],
  artistDetails: {},
  songsFromArtist: [],
  songDetails: {},
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST_SUCCESS_ARTISTS:
      return {
        ...state,
        loading: false,
        error: null,
        songDetails: {},
        artistsList: payload.data,
      };
    case REQUEST_SUCCESS_ARTIST_DETAILS:
      return {
        ...state,
        loading: false,
        error: null,
        songDetails: {},
        artistDetails: payload.data,
      };
    case REQUEST_SUCCESS_SONGS:
      return {
        ...state,
        loading: false,
        error: null,
        songDetails: {},
        songsFromArtist: payload.data,
      };
    case REQUEST_SUCCESS_SONG_DETAILS:
      return {
        ...state,
        loading: false,
        error: null,
        songDetails: payload.data,
      };

    default:
      return state;
  }
}
