import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="Link">
      <Link className="Link" to="/">
        <p>Home</p>
      </Link>
      <h1>About</h1>
      <p>
        This app was designed for rating the Batman the Animated Series
        Episodes. The Series ran from 1992 to 1995 on Fox consisting of 85
        episodes. Seasson One consisted of 65 episodes under the name Batman:
        the Animated Series. Season Two contained 20 more episodes under the
        name The Adventures of Batman & Robin. The New Batman Adventures was a
        continuation of the series that aired on The WB network from 1997 to
        1999 with 24 Episodes.
      </p>
      <p>
        {' '}
        Note: To search for certain episodes in the ratings pages, the episodes
        must be scrolled down to the bottom for the search bar to work
        correctly.
      </p>
    </div>
  );
};

export default About;
