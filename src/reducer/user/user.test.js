import {reducer, ActionCreator, ActionTypes, AuthorizationStatus, Operation} from './user.js';
import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api/api.js';
import userAdapter from '../../adapters/user/user-adapter.js';

const api = createAPI(() => {});

describe(`UserReducer works correctly`, () => {
  it(`UserReducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isLoading: false,
      userData: null,
      loginStatusCode: 0,
    });
  });

  it(`Should UserReducer change auth status`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`Should UserReducer change auth status`, () => {
    expect(reducer({
      loginStatusCode: 0,
    }, ActionCreator.setAuthorizationStatusCode(400))).toEqual({
      loginStatusCode: 400
    });
  });

  it(`Should UserReducer set user data`, () => {
    expect(reducer({
      userData: null,
    }, ActionCreator.setUserData({name: `Test user`}))).toEqual({
      userData: {name: `Test user`}
    });
  });

  it(`Should UserReducer set auth in progress`, () => {
    expect(reducer({
      isLoading: false,
    }, ActionCreator.setAuthorizationProgress(true))).toEqual({
      isLoading: true,
    });
  });
});

describe(`User action creators work correctly`, () => {
  it(`User action creator for set auth status returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionTypes.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`User action creator for set auth status code returns correct action`, () => {
    expect(ActionCreator.setAuthorizationStatusCode(400)).toEqual({
      type: ActionTypes.SET_AUTHORIZATION_STATUS_CODE,
      payload: 400,
    });
  });

  it(`User action creator for set user data returns correct action`, () => {
    expect(ActionCreator.setUserData({name: `Test user`})).toEqual({
      type: ActionTypes.SET_USER_DATA,
      payload: {name: `Test user`},
    });
  });

  it(`User action creator for set auth in progress returns correct action`, () => {
    expect(ActionCreator.setAuthorizationProgress(true)).toEqual({
      type: ActionTypes.AUTHORIZATION_IN_PROGRESS,
      payload: true,
    });
  });
});

describe(`User Operation works correctly`, () => {
  it(`Operation check auth works correctly`, () => {
    const authInfo = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      [`avatar_url`]: `img/1.png`
    };
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, authInfo);

    return checkAuth(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls[0][0]).toEqual(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      expect(dispatch.mock.calls[1][0]).toEqual(ActionCreator.setUserData(userAdapter(authInfo)));
    });
  });

  it(`Operation login works correctly`, () => {
    const authInfo = {
      id: 1,
      email: `Oliver.conner@gmail.com`,
      name: `Oliver.conner`,
      [`avatar_url`]: `img/1.png`
    };
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login({
      email: `test@test.ru`,
      password: `12345`,
    });

    apiMock
      .onPost(`/login`)
      .reply(200, authInfo);

    return login(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(4);
      expect(dispatch.mock.calls[0][0]).toEqual(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      expect(dispatch.mock.calls[1][0]).toEqual(ActionCreator.setAuthorizationStatusCode(200));
      expect(dispatch.mock.calls[2][0]).toEqual(ActionCreator.setUserData(userAdapter(authInfo)));
      expect(dispatch.mock.calls[3][0]).toEqual(ActionCreator.setAuthorizationProgress(false));
    });
  });
});
