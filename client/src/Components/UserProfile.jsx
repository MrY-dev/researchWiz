import { useState, useEffect } from 'react';
import InnerNavbar from './InnerNavbar.jsx';
import './UserProfile.css';
import getUserNameAPI from '../API/getUserNameAPI.js';
import getHistAPI from '../API/getHistAPI.js';

export default function UserProfile() {
  const [userName, setUserName] = useState('');
  const [userHist, setUserHist] = useState([]);

  useEffect(() => {
    const fetchUName = async () => {
      const response = await getUserNameAPI({ email });
        if (response.statusCode === 200) {
          setUserName(response.data);
        } else {
          setUserName('');
        }
    };
    fetchUName();
  }, []);

  useEffect(() => {
    const fetchHist = async () => {
      const response = await getHistAPI({ email });
        if (response.statusCode === 200) {
          setUserHist(response.data);
        } else {
          setUserHist([]);
        }
    };
    fetchHist();
  }, []);

  return (
    <div className='userprofile'>
        <InnerNavbar/>
      <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-around flex-row user-profile">
          <div className="col-lg-5 text-center">
            <div className="about-img">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Profile" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="user-details">
              <h2>{userName}</h2>
              <p>{email}</p>
            </div>
          </div>
        </div>
        <div className="history-user-profile">
          <h3>History User Profile</h3>
          <ul>
            {userHist.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
};