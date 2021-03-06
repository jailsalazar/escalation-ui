import React, {Component} from 'react';
import './styles/App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Create from './components/Create';
import MainToolbar from './components/MainToolbar';
import { withRouter } from "react-router";
import SiteSelection from './components/SiteSelection';
import SecureCreate from './components/SecureCreate';
import SecureLogin from './components/SecureLogin';

class App extends Component {
  constructor (props) {
    super (props);

    this.state = {
      auth: false
    };

  }

  setAuth(value) {
    this.setState({auth: value});
  }

  render () {
    return (
      <Router>
        <div className="App">
          <MainToolbar setAuth={(e) => this.setAuth(e)} auth={this.state.auth} />

          <Switch>
          <Route path="/vulnerable/login">
              <Login />
            </Route>
            <Route path="/vulnerable/create">
              <Create />
            </Route>
            <Route path="/vulnerable/home">
              <Home />
            </Route>
            <Route path="/vulnerable">
              <Login />
            </Route>
            <Route path="/secure/login">
              <SecureLogin setAuth={(e) => this.setAuth(e)}/>
            </Route>
            <Route path="/secure/create">
              <SecureCreate />
            </Route>
            <Route path="/secure/home">
              <Home auth={this.state.auth}/>
            </Route>
            <Route path="/secure">
              <SecureLogin setAuth={(e) => this.setAuth(e)}/>
            </Route>
            <Route path="/">
              <SiteSelection />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
