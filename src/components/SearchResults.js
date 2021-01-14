import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import RestaurantShow from './RestaurantShow';
import GoogleMaps from './GoogleMaps'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class SearchResults extends React.Component {
  
  state = {
    search: [],
    lat: '',
    lng: ''
  }

  componentDidMount(){
    axios.get(`${config.url.API_URL}/search`, {params: {search: this.props.match.params.query}})
    .then(response => {
      this.setState({search: response.data});
      console.log('Response', response);
    })
    .catch(error => {
      console.warn(error);
    });
  } // componentDidMount

  componentDidMount(){
    axios.get(`${config.url.API_URL}/restaurants`)
    .then(response => {
      console.log('Response', response)
    })
    .catch(error => console.warn(error));
  }

  render() {
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Cuisine</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.search.map(r => {
                return (
                  <tr key={r.id}>
                    <td><Link to={`/restaurant/${r.id}`}>{r.name}</Link></td>
                    <td>{r.cuisine}</td>
                    <td>{r.address}</td>
                  </tr>
                );
                <Route exact path="/restaurant/:id" component={RestaurantShow}></Route>
              })
            }
          </tbody>
        </table>
        <GoogleMaps />
      </div>
    )
  } // render()
} // class SearchResults

export default SearchResults
