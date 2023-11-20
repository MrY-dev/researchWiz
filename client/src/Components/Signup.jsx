import { IoEye, IoEyeOff } from 'react-icons/io5';
import React, { useState } from "react";
import "./NavbarWelcome.css";
import NavbarWelcome from "./NavbarWelcome";
import "./Loginpage.css";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Passwords match, proceed with signup
      console.log("Passwords matched!");
      // Add your signup logic here
    } else {
      // Passwords do not match, display an error
      setPasswordError("Passwords do not match!");
    }
  };

  return (
    <div>
      <NavbarWelcome navType="Signup" />

      <div className="main2">
        <p className="sign" align="center">
          Sign Up
        </p>
        <form className="form1" onSubmit={handleSubmit}>
          <input
            className="un"
            type="text"
            align="center"
            placeholder="Enter Name"
          />
          <input
            className="un"
            type="email"
            align="center"
            placeholder="Email"
          />
<div className="password-container">
      <input
        className="pass"
        type={showPassword ? "text" : "password"}
        align="center"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <span className="toggle-password" onClick={togglePasswordVisibility}>
        {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
      </span>
    </div>
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {passwordError && (
            <p className="error-message" align="center">
              {passwordError}
            </p>
          )}
          <button type="submit" className="submit" align="center">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
