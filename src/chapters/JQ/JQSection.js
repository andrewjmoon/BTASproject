import React from 'react';
import { Link } from 'react-router-dom';

export const JQSection = () => {
  return (
    <div className="App">
      <h1>The New Batman Adventures Section</h1>
      <br />
      <br />
      <Link className="Link" to="/">
        {' '}
        Home
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/nba/rater">
        {' '}
        The New Batman Adventures Rater
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/nba/episodes">
        {' '}
        The New Batman Adventures Episodes
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/nba/top">
        {' '}
        The Top Ten Episodes
      </Link>
      <hr />
    </div>
  );
};
