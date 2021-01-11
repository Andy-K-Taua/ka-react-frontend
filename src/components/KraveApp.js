import React from 'react'
import {Route, Link, HashRouter as Router} from 'react-router-dom'

import RestaurantSignUp from './RestaurantSignUp'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import SignUpForm from './SignUpForm'
import UserLogin from './UserLogin'
import axios from 'axios'
import RestaurantShow from './RestaurantShow'

class KraveApp extends React.Component {

componentDidMount(){
  axios.defaults.headers.common["Authorization"]=localStorage.getItem("jwtToken")
}

handleLogout(){
  localStorage.setItem("jwtToken", null);
  axios.defaults.headers.common["Authorization"]=null;
}

  render() {

    return (
      <div>
        <Router>
        <nav>
          <Link to="/restaurants/signup">New Restaurant</Link>
          <Link to="/" onClick={this.handleLogout}>Log out</Link>
        </nav>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/results/:query" component={SearchResults} />
          <Route exact path="/restaurant/:id" component={RestaurantShow} />
          <Route exact path="/restaurants/signup" component={RestaurantSignUp} />
          <Route exact path="/login" component={UserLogin} />
        </Router>
      </div>
    );
  } // render()
} // class KraveApp

export default KraveApp
