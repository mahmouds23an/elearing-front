// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // Update as necessary
  withCredentials: true, // Allow cookies to be sent
});

export const registerStudent = (data) => API.post("/auth/create-student", data);
export const verifyOtp = (data) => API.post("/auth/verify-otp", data);
export const resendOtp = () => API.post("/auth/resend-otp");
export const loginUser = (data) => API.post("/auth/login-user", data);
export const logoutUser = () => API.post('/auth/logout');

