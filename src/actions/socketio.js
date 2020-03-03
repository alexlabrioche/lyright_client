import socketIOClient from 'socket.io-client';
import { INIT_SOCKET_IO } from './types';

const baseUrl = process.env.REACT_APP_SERVER_BASE_URL;

export const initSocketIo = () => {
  const socket = socketIOClient(baseUrl);
  return {
    type: INIT_SOCKET_IO,
    payload: socket,
  };
};
