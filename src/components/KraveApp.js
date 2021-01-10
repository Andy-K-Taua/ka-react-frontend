import React from 'react'
import {Route, Link, HashRouter as Router} from 'react-router-dom'

import RestaurantSignUp from './RestaurantSignUp'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import SignUpForm from './SignUpForm'
import UserLogin from './UserLogin'

class KraveApp extends React.Component {

  render() {

    return (
      <div>
        <Router>
        <nav>
          <Link to="/restaurants/signup">New Restaurant</Link>
        </nav>

          <Route exact path="/" component={SearchForm} />
          <Route exact path="/results/:query" component={SearchResults} />
          <Route exact path="/restaurants/signup" component={RestaurantSignUp} />
        </Router>
      </div>
    );
  } // render()
} // class KraveApp

export default KraveApp
