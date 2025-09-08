import axios from "axios";

// Create an Axios instance with base URL from environment
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",  
  },
});

// Request interceptor to add JWT token if available
axiosSecure.interceptors.request.use(
  (config) => {
    // Store token in local storage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    // If 401 response, token deleted from local storage
    const {response} = error;
    if (response.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
  
);

export default axiosSecure;
