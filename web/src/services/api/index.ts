import axios from 'axios';

export { paths } from './paths';

const protocol = 'http';
const host = '127.0.0.1';
const port = 8000;

export const useApi = axios.create({
  baseURL: `${protocol}://${host}:${port}`,
  headers: {
    'Content-Type': 'application/json'
  }
});

useApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    error = JSON.stringify(error.response, null, 4);
    return Promise.reject(`Service API Response Error: ${error}`);
  }
);

useApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    error = JSON.stringify(error.response, null, 4);
    return Promise.reject(`Service API Response Error: ${error}`);
  }
);
