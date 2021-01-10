import React from 'react';
import './App.css';
import UserLogin from './components/UserLogin';

import {Route, HashRouter as Router} from 'react-router-dom';

import 'bootstrap';

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">This is working</div>
          </div>
        </nav>


        <Router>
              <Route exact path="/user" component={UserLogin} />
        </Router>

              </div>
            );

          } // render()

        } // class App

export default App;
