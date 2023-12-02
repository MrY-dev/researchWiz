import "./NavbarWelcome.css"; // Import CSS before using NavbarWelcome component
import NavbarWelcome from "./NavbarWelcome";
import "./Loginpage.css";

export default function Loginpage() {
  return (
    // <div className="login-page">
      <div >
                <NavbarWelcome navType="Login" />

        <div className="main">
          <p className="sign" align="center">
            Sign in
          </p>
          <form className="form1" method="POST">
            <input
              className="un"
              type="email"
              align="center"
              placeholder="Email"
            />
            <input
              className="pass"
              type="password"
              align="center"
              placeholder="Password"
            />
            <a className="submit" href="#" align="center">
              Sign in
            </a>
            {/* <p className="forgot" align="center"><a href="#">Create account</a></p> */}
          </form>
        </div>
      </div>
    // </div>
  );
}
