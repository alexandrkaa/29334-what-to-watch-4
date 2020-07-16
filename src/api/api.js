import axios from 'axios';
import {BASE_API_URL, API_REQUEST_TIMEOUT} from '../consts/consts.js';
import {NetworkErrors} from '../consts/consts.js';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: API_REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err_) => {
    const {response} = err_;
    if (response && response.status === NetworkErrors.UNAUTHORIZED) {
      dispatch();
      throw err_;
    }
    throw err_;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
