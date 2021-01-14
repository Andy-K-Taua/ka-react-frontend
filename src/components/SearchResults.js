import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import RestaurantShow from './RestaurantShow';


class SearchResults extends React.Component {

  state = {
<<<<<<< HEAD
    search: [],
=======
    search: []
>>>>>>> cc0decf6a6316176075d13e445f17f149d8c194b
  }

  componentDidMount(){
    axios.get(`${config.url.API_URL}/search`, {params: {search: this.props.match.params.query}})
    .then(response => {
      this.setState({search: response.data});
<<<<<<< HEAD
      // console.log('Response', response);
=======
>>>>>>> cc0decf6a6316176075d13e445f17f149d8c194b
    })
    .catch(error => {
      console.warn(error);
    });
  } // componentDidMount

<<<<<<< HEAD

    

=======
>>>>>>> cc0decf6a6316176075d13e445f17f149d8c194b
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
      </div>
    )
  } // render()
} // class SearchResults

export default SearchResults
