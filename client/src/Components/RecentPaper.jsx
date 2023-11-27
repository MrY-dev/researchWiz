import { useEffect, useState } from 'react';
import { recentSearch } from './mockData.js';

export default function RecentPaper() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    setRecent(recentSearch);
  }, []);

  return (
    <div>
      <h1>Recent Viewed Papers</h1>
      {recent.length === 0 ? (
        <p>No recent searches</p>
      ) : (
        <div>
          {recent.map((paper, index) => (
            <h4 key={index}>{paper.title}</h4>
          ))}
        </div>
      )}
    </div>
  );
}
