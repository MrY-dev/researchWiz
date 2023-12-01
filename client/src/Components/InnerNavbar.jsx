import './InnerNavbar.css';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Importing the User icon from react-icons

export default function InnerNavbar() {
  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <b>ResearchWiz</b>
        </Link>
        <ul className="links">
          <Link to="#">
            <li>Home</li>
          </Link>
          <Link to="#">
            <li>Graph</li>
          </Link>
          <Link to="#">
            {/* Replace the "Profile" text with the User icon */}
            <li>
              <FaUser /> {/* Rendering the User icon */}
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
