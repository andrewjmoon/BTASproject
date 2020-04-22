import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="App">
      <h1>Home</h1>
      <br />
      <br />
      <Link className="Link" to="/about">
        {' '}
        About Page
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/btas/section">
        {' '}
        Batman the Animated Series Section
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/nba/section">
        {' '}
        The New Batman Adventures Section
      </Link>
      <hr />
      <br />
    </div>
  );
};
