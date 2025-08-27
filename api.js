// src/api/axios.js
import axios from "axios";
import { useNavigate } from "react-router-dom"; // optional if you want redirect

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change for production
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request interceptor (attach token)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response interceptor (handle errors globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.warn("⚠️ Token expired or unauthorized");
        localStorage.removeItem("token");

        // Optionally redirect to login (only works inside React components)
        // const navigate = useNavigate();
        // navigate("/login");

        // If you don’t want navigate here, just force reload:
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;
