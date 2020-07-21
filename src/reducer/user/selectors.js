import NameSpace from '../name-space.js';
import {AuthorizationStatus} from '../user/user.js';

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getAuthorizationStatusBoolean = (state) => {
  return AuthorizationStatus.AUTH === getAuthorizationStatus(state);
};

export const getLoginStatusCode = (state) => {
  return state[NAME_SPACE].loginStatusCode;
};

export const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};

export const getIsLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};
