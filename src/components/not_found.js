import React from 'react';
import { Route, Link } from 'react-router-dom';

const Section = ({match}) => {
  return <h1>{match.params.section}</h1>;
}

const NotFound = ({ match, location }) => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Not Found</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>

      <div className="container">
        <h2>Nested route example</h2>
        <Link to="/about/food">food</Link>
        <Link to="/about/drinks">drinks</Link>
        <Link to="/about/sides">sides</Link>
        <Route path="/about/:section" component={Section} />
        <p>{JSON.stringify(match)}</p>
        <p>{JSON.stringify(location)})</p>
      </div>
    </div>
  );
}

export default NotFound;
