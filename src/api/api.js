import axios from 'axios';
import {BASE_URL, API_REQUEST_TIMEOUT} from '../consts/consts.js';

const Error = {
  UNAUTHORIZED: 401
};


const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: API_REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response && response.status === Error.UNAUTHORIZED) {
      dispatch();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
