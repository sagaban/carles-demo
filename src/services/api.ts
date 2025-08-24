import axios from 'axios';
import { getToken } from 'utils/authCookies';

export const ApiService = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: import.meta.env.VITE_BACKEND_TIMEOUT || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // -> When authentication is implemented
});

ApiService.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
