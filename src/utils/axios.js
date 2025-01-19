import axios from "axios";
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: { 'x-api-key': import.meta.env.VITE_API_KEY }
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.url.includes('/local')  ) {
      const token = Cookies.get('token'); 
      
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
