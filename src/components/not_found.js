import React from 'react';
import { Route, Link } from 'react-router-dom';

const Section = ({match}) => {
  return <h1>{match.params.section}</h1>;
}

const NotFound = ({ match, location }) => {
  return (
    <div>
      <h1>Not Found</h1>

      <h2>Nested route example</h2>
      <Link to="/about/food">food</Link>
      <Link to="/about/drinks">drinks</Link>
      <Link to="/about/sides">sides</Link>
      <Route path="/about/:section" component={Section} />
      <p>{JSON.stringify(match)}</p>
      <p>{JSON.stringify(location)})</p>
      <p>{new URLSearchParams(location.search).get('id')}</p>
    </div>
  );
}

export default NotFound;
