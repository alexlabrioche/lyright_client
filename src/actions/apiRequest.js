import axios from 'axios';

import { REQUEST_STARTED, REQUEST_SUCCESS, REQUEST_FAIL } from './types';

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestFail = error => ({
  type: REQUEST_FAIL,
  payload: error,
});

const dispatchRequestSuccess = (data, subType) => ({
  type: `${REQUEST_SUCCESS}_${subType}`,
  payload: data,
});

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const apiRequest = (subType = '', uri = '', verb = 'get') => {
  return dispatch => {
    dispatch(requestStarted());
    axios[verb](`${baseUrl}${uri}`)
      .then(({ data }) => {
        dispatch(dispatchRequestSuccess(data, subType));
      })
      .catch(err => {
        dispatch(requestFail(err.message));
      });
  };
};
