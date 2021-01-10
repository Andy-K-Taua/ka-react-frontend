import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import MenuShowResults from './MenuShowResults';

class SearchResults extends React.Component {

  state = {
    search: []
  }

  componentDidMount(){
    axios.get(`${config.url.API_URL}/search`, {params: {search: this.props.match.params.query}})
    .then(response => {
      this.setState({search: response.data});
    })
    .catch(error => {
      console.warn(error);
    });
  } // componentDidMount

  render() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Cuisine</th>
              <th>Address</th>
              <th>Menu</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.search.map(r => {
                return (
                  <tr key={r.id}>
                    <td>{r.name}</td>
                    <td>{r.cuisine}</td>
                    <td>{r.address}</td>
                    <td><Link to={`/results/${this.props.match.params.query}/${r.menu_id}`}>{r.menu_id}</Link></td>
                  </tr>
                );
                <Route exact path="/results/:query/menu" component={MenuShowResults}></Route>
              })
            }
          </tbody>
        </table>
      </div>
    )
  } // render()
} // class SearchResults

export default SearchResults
