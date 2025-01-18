import axios from "axios";
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 1000,
    headers: {'x-api-key': import.meta.env.VITE_API_KEY}
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = Cookies.get('token'); // Get the token from the cookie
      
      if (token) {
        // If the token exists, add it to the Authorization header
        config.headers['Authorization'] = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );