import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell } from 'react-icons/fa'; // Importing the User icon from react-icons
import './InnerNavbar.css';
import AlertModal from './AlertModal.jsx';
import NotificationContainer from './NotificationContainer.jsx';
import { alertList } from './mockData.js';

export default function InnerNavbar({ type }) {
  const [notifications, setNotifications] = useState(alertList);
  const [showNotifications, setShowNotifications] = useState(false);

  const clearNotifications = () => {
    setNotifications([]);
  };

  const openModal = () => {
    setShowNotifications(true);
  };

  const closeModal = () => {
    setShowNotifications(false);
  };

  return (
    <header>
      <div className="container">
        <Link to="/" className="logo">
          <img src='./logo.png' alt="Logo" className="logo-img" />
          <b>ResearchWiz</b>
        </Link>
        <ul className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/graph">
            <li>Graph</li>
          </Link>
          {type === 'pdf' && <li>
            <button className='alert-button' onClick={openModal}>
              <FaBell />
            </button>
            {showNotifications && (
              <AlertModal onClose={closeModal}>
                <NotificationContainer
                  notifications={notifications}
                  clearNotifications={clearNotifications}
                />
              </AlertModal>
            )}
          </li>}
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
