

import { Link } from 'react-router-dom';
import NavbarWelcome from './NavbarWelcome';
import './Welcome.css';

export default function Welcome () {
  return (
    <div className="landing-page">
      <NavbarWelcome navType="Landing" />
      <div className="content">
        <div className="container">
          <div className="info">
            <h1>Connecting Research to Reality</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam
              nesciunt quidem iste, Repellendus odit nihil
            </p>
            <Link to='/login'><button>Log In</button></Link>
          </div>
          <div className="image">
            <img src="https://i.postimg.cc/65QxYYzh/001234.png" alt="Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

