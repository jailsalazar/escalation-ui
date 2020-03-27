import React, {Component} from 'react';
import './styles/App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Home />

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
