// src/api/apiClient.js
import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://telelawmh.in/laravel/api', // Replace with your actual base URL
});

// Add a request interceptor to attach the token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    console.log("token", token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
