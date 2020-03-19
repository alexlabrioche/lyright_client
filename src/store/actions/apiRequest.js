import axios from 'axios';
import {
  REQUEST_STARTED,
  REQUEST_SUCCESS,
  REQUEST_FAIL,
  ADD_ACCESS_TOKEN,
  REMOVE_ACCESS_TOKEN,
} from './types';

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

const axiosDefaultOptions = {
  uri: '',
  verb: 'get',
  data: {},
  headers: {
    'Content-Type': 'application/json',
  },
};

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

export const removeAccessToken = () => ({
  type: REMOVE_ACCESS_TOKEN,
});

export const addAccessToken = token => ({
  type: ADD_ACCESS_TOKEN,
  payload: token,
});

export const apiRequest = (subType = '', options = axiosDefaultOptions) => {
  const { uri, verb, data, headers } = options;
  return dispatch => {
    dispatch(requestStarted());
    axios[verb](`${baseUrl}/api${uri}`, { headers, ...data })
      .then(({ data }) => {
        console.log('axios data', data);
        dispatch(dispatchRequestSuccess(data, subType));
      })
      .catch(err => {
        dispatch(requestFail(err.message));
      });
  };
};
