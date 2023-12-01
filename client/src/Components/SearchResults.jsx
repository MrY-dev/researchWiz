import './SearchResults.css'; // Import in SearchResults.jsx

export default function SearchResults(props) {
  const handleItemClick = (item) => {
    console.log('Clicked:', item);
  };

  return (
    <div className="container">
      {props.search.length === 0 ? <div><p>No results found</p></div> : (props.search.map((item, index) => (
        <div
          className="card mb-3"
          key={index}
          onClick={() => handleItemClick(item)}
          style={{ cursor: 'pointer' }}
        >
          <div className="card-body">
            <h5 className="card-title">Title: {item.title}</h5>
            <p className="card-text">Author: {item.author}</p>
            <p className="card-text">Year: {item.year}</p>
          </div>
        </div>
      )))}
    </div>
  );
}
