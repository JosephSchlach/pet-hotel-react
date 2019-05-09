import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import AddOwner from '../AddOwner/AddOwner';
import AddPet from '../AddPet/AddPet';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <header className="MainHead">
            <h1>PET HOTEL</h1>
          </header>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={AddPet}
            />
            <Route
              exact
              path="/owner"
              component={AddOwner}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps)(App);
