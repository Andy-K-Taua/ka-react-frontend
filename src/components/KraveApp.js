import React from 'react'
import {Route, HashRouter as Router} from 'react-router-dom'

import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import SignUpForm from './SignUpForm'

class KraveApp extends React.Component {

  render() {

    return (
      <div>
        <Router>
          <Route exact path="/" component={SearchForm} />
          <Route exact path="/results/:query" component={SearchResults} />
        </Router>
      </div>
    );
  } // render()
} // class KraveApp

export default KraveApp
