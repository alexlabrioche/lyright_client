import { LOGOUT } from './types';

export const logout = id => ({
  type: LOGOUT,
  payload: id,
});
