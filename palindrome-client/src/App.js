import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetPalindrome from './components/layout/GetPalindromes';
import PostPalindrome from './components/layout/PostPalindrome';
import LandingPage from './components/layout/LandingPage';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <section className="container">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/post" component={PostPalindrome} />
          <Route exact path="/get" component={GetPalindrome} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
