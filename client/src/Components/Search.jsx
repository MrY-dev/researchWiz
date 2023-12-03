import { useEffect, useState } from 'react';
import InnerNavbar from './InnerNavbar.jsx';
import SearchResults from './SearchResults.jsx';
import RecentPaper from './RecentPaper.jsx';
import './Search.css'; // Import in Search.jsx
import getSearchAPI from '../API/getSearchAPI.js';
import getRecomAPI from '../API/getRecomAPI.js';

export default function Search() {
  const [res, setRes] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('title');

  const email = localStorage.getItem('email');

  useEffect(() => {
    if (search === '') {
      // API call for default data or recent searches
      const fetchRecom = async () => {
        const response = await getRecomAPI({ email: email });
        if (response.statusCode === 200) {
          setRes(response.data);
        } else {
          setRes([]);
        }
      };
      fetchRecom();
    } else {
      // API call for search based on input
      const fetchSearch = async () => {
        const response = await getSearchAPI({ keyword: search, filter });
        if (response.statusCode === 200) {
          setRes(response.data);
        } else {
          setRes([]);
        }
      };
      fetchSearch();
    }
  }, [search, res, filter, email]);

  const handleDrpdnChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getSearchAPI({ keyword: search, filter });
    if (response.statusCode === 200) {
      setRes(response.data);
    } else {
      setRes([]);
    }
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
                onChange={handleSearch}
              />
            </div>
            <div className="col-md-1">
              <select className="form-select" id="filter-dropdown" value={filter} onChange={handleDrpdnChange} >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="year">Year</option>
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
