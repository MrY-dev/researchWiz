import { useEffect, useState } from 'react';
import InnerNavbar from './InnerNavbar.jsx';
import SearchResults from './SearchResults.jsx';
import { searchData, responseData } from './mockData.js';
import RecentPaper from './RecentPaper.jsx';
import './Search.css'; // Import in Search.jsx

export default function Search() {
  const [res, setRes] = useState(responseData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') {
      // API call for default data or recent searches
      if (res !== '') {
        setRes(responseData);
      }
    } else {
      // API call for search based on input
      if (res !== '') {
        setRes(searchData);
      } else {
        setRes([]);
      }
    }
  }, [search, res]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You might need to make an API call here based on the search input
    // For demonstration, it sets the response data directly from mockData
    setRes(searchData);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-page">
      <InnerNavbar />
      <form onSubmit={handleSubmit}>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                className="form-control"
                id="search-input"
                placeholder="Search..."
                onKeyUp={handleSearch}
              />
            </div>
            <div className="col-md-1">
              <select className="form-select" id="filter-dropdown">
                <option value="option1">Topic</option>
                <option value="option2">Author</option>
                <option value="option3">Year</option>
              </select>
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary" id="search-button">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <SearchResults search={res} />
          </div>
          <div className="col-md-4">
            <RecentPaper />
          </div>
        </div>
      </div>
    </div>
  );
}
