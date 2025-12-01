import axios, { type InternalAxiosRequestConfig, type AxiosResponse } from 'axios';
import { ElMessage } from 'element-plus';

// Create axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
});

// Check if we should use mock
const USE_MOCK = false; // Disabled mock

// Request interceptor
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // If response comes from mock adapter, it might be already formatted or raw axios response
    const res = response.data;
    
    // Backend standard response structure: { code, msg, data }
    if (res.code !== 200) {
      ElMessage.error(res.msg || 'Error');
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    return res.data;
  },
  (error: any) => {
    ElMessage.error(error.response?.data?.msg || error.message || 'Request Error');
    return Promise.reject(error);
  }
);

export default service;
