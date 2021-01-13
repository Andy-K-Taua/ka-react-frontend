import React from 'react'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
// import { GoogleMap, UseJsApiLoader } from '@react-google-maps/api'

import RestaurantSignUp from './RestaurantSignUp'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import SignUpForm from './SignUpForm'
import UserLogin from './UserLogin'
import RestaurantShow from './RestaurantShow'
// import GoogleMaps from './GoogleMaps'
import ControlPanel from './ControlPanel'

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
          <Link to="/signup">New User</Link>
          <Link to="/" onClick={this.handleLogout}>    Log Out</Link>
        </nav>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/results/:query" component={SearchResults} />
          <Route exact path="/restaurant/:id" component={RestaurantShow} />
          <Route exact path="/restaurants/signup" component={RestaurantSignUp} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/control" component={ControlPanel} />
        </Router>

        {/* <GoogleMaps /> */}
      </div>
    );
  } // render()
} // class KraveApp

export default KraveApp
