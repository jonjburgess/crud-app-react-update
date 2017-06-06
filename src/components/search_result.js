import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ hit }) => {
  return (
    <div className="mb-2">
      <Link to={`posts/${hit.objectID}`}>
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{hit.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{hit.breed}</h6>
            <p className="card-text">age: {hit.age}, gender: {hit.sex}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchResult;
