// RecentPaper.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecentPaper.css'; // Import in RecentPaper.jsx
import getRecentAPI from '../API/getRecentAPI.js';

export default function RecentPaper() {
  const [recent, setRecent] = useState([]);
  const email = localStorage.getItem('email');

  useEffect(() => {
    const fetchRecent = async () => {
      const response = await getRecentAPI({ email: email });
      console.log(response)
      if (response.statusCode === 200) {
        setRecent(response.data);
      } else {
        setRecent([]);
      }
    setRecent();
    }
    fetchRecent();
  }, [email]);
  console.log(recent)
  return (
    <div className="container mt-4" id="rec">
      <h3>Recent Viewed Papers</h3>
      <div className="row">
        <div className="col" id="columnrec">
          {recent === undefined ? (
            <p>No recent searches</p>
          ) : (
            <div>
              {recent.map((paper, index) => (
                // <Link key={index} to={paper.link} target="_blank" rel="noopener noreferrer" className='rec-clickable'>
                //   {paper.title}
                // </Link>
                <Link
                  to={`/pdfviewer/${encodeURIComponent(paper.title)}`}
                  className="rec-clickable"
                  key={index}
                  style={{ cursor: 'pointer' }}
                >
                  {paper.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
