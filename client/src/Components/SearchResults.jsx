import { Link } from 'react-router-dom';
import './SearchResults.css';

export default function SearchResults(props) {
  return (
    <div className="container">
      {props.search.length === 0 ? <div><p>No results found</p></div> : (props.search.map((item, index) => (
        <Link
          to={`/pdfviewer/${encodeURIComponent(item.title)}`}
          className="card mb-3"
          key={index}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-body">
            <h5 className="card-title">Title: {item.title}</h5>
            <p className="card-text">Author: {item.author}</p>
            <p className="card-text">Year: {item.year}</p>
          </div>
        </Link>
      )))}
    </div>
  );
}
