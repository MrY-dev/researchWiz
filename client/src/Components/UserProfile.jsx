import InnerNavbar from './InnerNavbar'
import './UserProfile.css'
export default function UserProfile() {
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
              <h2>John Doe</h2>
              <p>johndoe@example.com</p>
            </div>
          </div>
        </div>
        <div className="history-user-profile">
          <h3>History User Profile</h3>
          <ul>
            <li>First point</li>
            <li>Second point</li>
            <li>Third point</li>
            <li>Fourth point</li>
            <li>Fifth point</li>
            <li>Sixth point</li>
            <li>Seventh point</li>
            <li>Eighth point</li>
            <li>Ninth point</li>
            <li>Tenth point</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
};