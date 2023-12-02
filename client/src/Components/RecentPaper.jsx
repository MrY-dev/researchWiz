// RecentPaper.jsx
import { useEffect, useState } from 'react';
import { recentSearch } from './mockData.js';
import { Link } from 'react-router-dom';
import './RecentPaper.css'; // Import in RecentPaper.jsx

export default function RecentPaper() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    setRecent(recentSearch);
  }, []);

  return (
    <div className="container mt-4" id="rec">
      <h3>Recent Viewed Papers</h3>
      <div className="row">
        <div className="col" id="columnrec">
          {recent.length === 0 ? (
            <p>No recent searches</p>
          ) : (
            <div>
              {recent.map((paper, index) => (
                <Link key={index} to={paper.link} target="_blank" rel="noopener noreferrer" className='rec-clickable'>
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
