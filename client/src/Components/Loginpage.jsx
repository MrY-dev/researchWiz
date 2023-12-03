import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavbarWelcome.css"; // Import CSS before using NavbarWelcome component
import NavbarWelcome from "./NavbarWelcome.jsx";
import "./Loginpage.css";
import logUserAPI from '../API/logUserAPI.js';

export default function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const response = logUserAPI({email, password});
    if (response.statusCode !== 200){
      setLoginSuccess(false);
      setErrMsg('Could not login');
    }
    setLoginSuccess(true);
    setErrMsg('');
    const { token } = response.data;
    localStorage.setItem('token', token);
    navigate('/search');
  }

  return (
    // <div className="login-page">
      <div >
                <NavbarWelcome navType="Login" />

        <div className="main">
          <p className="sign" align="center">
            Sign in
          </p>
          <form className="form1" method="POST" onSubmit={handleSubmit}>
            <input
              className="un"
              type="email"
              align="center"
              placeholder="Email"
              onChange={handleEmail}
            />
            <input
              className="pass"
              type="password"
              align="center"
              placeholder="Password"
              onChange={handlePassword}
            />
            <input type="submit" className="submit" align="center">
              Sign in
            </input>
            {/* <p className="forgot" align="center"><a href="#">Create account</a></p> */}
          </form>
        </div>
      </div>
    // </div>
  );
}
