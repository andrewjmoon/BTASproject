import React from 'react';
import { Link } from 'react-router-dom';

export const BtasSection = () => {
  return (
    <div className="App">
      <h1>Batman the Animated Series Section</h1>
      <br />
      <br />
      <Link className="Link" to="/">
        {' '}
        Home
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/btas/rater">
        {' '}
        BTAS Rater
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/btas/episodes">
        {' '}
        BTAS Episodes
      </Link>
      <hr />
      <br />
      <Link className="Link" to="/btas/top">
        {' '}
        Top Twenty Episodes
      </Link>
      <hr />
    </div>
  );
};
