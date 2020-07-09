import axios from 'axios';
import {BASE_URL, TIMEOUT} from '../consts/consts.js';

const Error = {
  UNAUTHORIZED: 401
};


const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      dispatch();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
