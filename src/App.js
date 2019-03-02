import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

/** Importing CSS and Images/SVG's */
import './App.css';

/** Importing Components */
import Homepage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route path="/" exact component={Homepage} />

        <Route path="/register" exact component={RegisterPage} />

        <Route path="/login" exact component={LoginPage} />

      </div>
    );
  }
}

export default withRouter(connect(null, {})(App));
