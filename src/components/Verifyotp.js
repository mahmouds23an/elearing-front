// src/components/VerifyOtp.js
import React, { useState } from "react";
import { verifyOtp, resendOtp } from "../api";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate(); 

  const handleVerify = async () => {
    try {
      await verifyOtp({ otp });
      alert("Email verified successfully!");
      navigate('/login');
      // Redirect to Home or Login
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleResend = async () => {
    try {
      await resendOtp();
      alert("OTP resent to your email.");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={handleVerify}>Verify OTP</button>
      <button onClick={handleResend}>Resend OTP</button>
    </div>
  );
};

export default VerifyOtp;
