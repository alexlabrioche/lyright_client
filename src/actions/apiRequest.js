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

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

const axiosDefaultOptions = {
  uri: '',
  verb: 'get',
  data: {},
  headers: {
    'Content-Type': 'application/json',
  },
};

export const apiRequest = (subType = '', options = axiosDefaultOptions) => {
  const { uri, verb, data, headers } = options;
  return dispatch => {
    dispatch(requestStarted());
    axios[verb](`${baseUrl}/api${uri}`, { headers, ...data })
      .then(({ data }) => {
        dispatch(dispatchRequestSuccess(data, subType));
      })
      .catch(err => {
        dispatch(requestFail(err.message));
      });
  };
};
