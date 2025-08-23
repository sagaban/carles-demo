import axios from 'axios';

export const ApiService = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: import.meta.env.VITE_BACKEND_TIMEOUT || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // -> When authentication is implemented

  // This is the way you later can add a interceptor to the api service

  // ApiService.interceptors.request.use((config) => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  //   return config;
  // });
});
