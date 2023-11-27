import { useEffect, useState } from 'react';
import { recentSearch } from './mockData.js';
import './RecentPaper.css'; // Import in RecentPaper.jsx

export default function RecentPaper() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    setRecent(recentSearch);
  }, []);

  return (
    <div className="container mt-4">
      <h3>Recent Viewed Papers</h3>
      <div className="row">
        <div className="col">
          {recent.length === 0 ? (
            <p>No recent searches</p>
          ) : (
            <div>
              {recent.map((paper, index) => (
                <h6 key={index}>{paper.title}</h6>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
