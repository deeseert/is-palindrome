import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Knowing if it is palindrome is never been cooler!</h1>
      <div>
        <Link to="/post">
          <button className="btn btn-primary">Check you palindrome now!</button>
        </Link>
        <Link to="/get">
          <button className="btn btn-secondary">See all palindromes</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
