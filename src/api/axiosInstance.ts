import axios from "axios";
import { getEnvVars } from "../constants/env";

const axiosInstance = axios.create({
  baseURL: getEnvVars("backendRoute"),
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
