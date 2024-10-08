// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      alert("Logged out successfully!");
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      alert("Error logging out: " + error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Student Portal</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
