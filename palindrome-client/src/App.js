import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetPalindrome from './components/GetPalindromes';
import PostPalindrome from './components/PostPalindrome';
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
