import React, {Component} from 'react';
import './styles/App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create';
import MainToolbar from './components/MainToolbar';
import { withRouter } from "react-router";

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <MainToolbar />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
