import "./NavbarWelcome.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavbarWelcome({ navType }) {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src='./logo.png' alt="Logo" className="logo-img" />
        </Link>
        <ul className="links">
          <Link to={navType === "Login" ? (
              "/signup"
            ) : navType === "Signup" ? (
              "/login"
            ) : navType === "Landing" ? (
              "/signup"
            ) : (
              ""
            )}>
            {navType === "Login" ? (
              <li>Sign Up</li>
            ) : navType === "Signup" ? (
              <li>Log In</li>
            ) : navType === "Landing" ? (
              <li>Sign Up</li>
            ) : (
              ""
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

NavbarWelcome.propTypes = {
  navType: PropTypes.string.isRequired,
};

PropTypes.default = {
  navType: "",
};
