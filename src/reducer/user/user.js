import userAdapter from '../../adapters/user/user-adapter.js';
import {extendObject} from '../../utils/common.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isLoading: false,
  userData: null,
  loginStatusCode: 0,
};

const ActionType = {
  AUTHORIZATION_IN_PROGRESS: `AUTHORIZATION_IN_PROGRESS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_AUTHORIZATION_STATUS_CODE: `SET_AUTHORIZATION_STATUS_CODE`,
  SET_USER_DATA: `SET_USER_DATA`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setAuthorizationStatusCode: (err) => {
    return {
      type: ActionType.SET_AUTHORIZATION_STATUS_CODE,
      payload: err,
    };
  },
  setUserData: (userData) => {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userData,
    };
  },
  setAuthorizationProgress: (isInProgress) => {
    return {
      type: ActionType.AUTHORIZATION_IN_PROGRESS,
      payload: isInProgress
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(userAdapter(response.data)));
      }).catch((err) => {
        // не обрабатываем ошибку 401, тк в interceptors axios если пользователь не авторизован уже вызывается dispatch для установки статуса авторизации
        if (err.response.status !== 401) {
          dispatch(ActionCreator.setAuthorizationStatusCode(err.response.status));
        }
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setAuthorizationStatusCode(response.status));
      dispatch(ActionCreator.setUserData(userAdapter(response.data)));
      dispatch(ActionCreator.setAuthorizationProgress(false));
    })
    .catch((err) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(ActionCreator.setAuthorizationStatusCode(err.response.status));
      dispatch(ActionCreator.setAuthorizationProgress(false));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extendObject(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_AUTHORIZATION_STATUS_CODE:
      return extendObject(state, {
        loginStatusCode: action.payload,
      });
    case ActionType.SET_USER_DATA:
      return extendObject(state, {
        userData: action.payload,
      });
    case ActionType.AUTHORIZATION_IN_PROGRESS:
      return extendObject(state, {
        isLoading: action.payload,
      });
    default:
      return state;
  }
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
