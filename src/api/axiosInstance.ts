import axios from "axios";
import { getEnvVars } from "../constants/env";

const axiosInstance = axios.create({
  baseURL: getEnvVars("backendRoute"),
  withCredentials: true,
});

export default axiosInstance;
