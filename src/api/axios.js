import axios from 'axios';

const clientAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

clientAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtoken');
  config.headers.Authorization = token ?? '';
  return config;
}); 

export default clientAxios;