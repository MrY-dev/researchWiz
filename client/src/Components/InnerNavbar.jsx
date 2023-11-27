import './InnerNavbar.css'
import { Link } from "react-router-dom";
export default function InnerNavbar() {
  return (
<header>
      <div className="container">
        <Link to="/" className="logo">
          <b>ResearchWiz</b>
        </Link>
        <ul className="links">
        <Link to="#"><li>Home</li></Link>
        <Link to="#"><li>Graph</li></Link>
        <Link to="#"><li>Profile</li></Link>
        </ul>
      </div>
    </header>
  )
}
