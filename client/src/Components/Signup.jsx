import { IoEye, IoEyeOff } from 'react-icons/io5';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./NavbarWelcome.css";
import NavbarWelcome from "./NavbarWelcome.jsx";
import "./Loginpage.css";
import signUserAPI from '../API/signUserAPI.js';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

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

  const handleUName = (e) => {
    setUserName(e.target.value);
  };

  const handleUEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Passwords match, proceed with signup
      const response = signUserAPI({ name: userName, password, email: userEmail });
      if (response.statusCode === 200){
        navigate('/');
      }
      else {
        setPasswordError("Could not signup user!");
      }
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
            onChange={handleUName}
          />
          <input
            className="un"
            type="email"
            align="center"
            placeholder="Email"
            onChange={handleUEmail}
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
