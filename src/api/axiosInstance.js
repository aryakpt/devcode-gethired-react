import axios from 'axios';
import apiConfig from './apiConfig';

const instance = (baseURL) => {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const todoRequest = instance(apiConfig.TODO_BASE_URL);

export { todoRequest };
