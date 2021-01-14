import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import {Link} from 'react-router-dom'

class SearchResults extends React.Component {

  state = {
    search: []
  }

  componentDidMount(){
    axios.get(`${config.url.API_URL}/search`, {params: {search: this.props.match.params.query}})
    .then(response => {
      this.setState({search: response.data});
      // console.log('Response', response);
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
              })
            }
          </tbody>
        </table>
      </div>
    )
  } // render()
} // class SearchResults

export default SearchResults
