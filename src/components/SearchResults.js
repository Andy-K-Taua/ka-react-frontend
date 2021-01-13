import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import RestaurantShow from './RestaurantShow';
<<<<<<< HEAD
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
=======
import GoogleMaps from './GoogleMaps'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
>>>>>>> feaea99e54ae20e29eafd3241ba8521e9db2d28d


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
        {
          this.state.search.map(r => (
            <Card style={{ width: '18rem' }} key={r.id}>
              <Card.Body>
                <Card.Img variant="top" src="http://placekitten.com/200/200"></Card.Img>
                <Card.Title>{r.name}</Card.Title>
                <Card.Text>This is where we write some info about the restaurant</Card.Text>
              </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{r.address}</ListGroupItem>
                  <ListGroupItem>{r.cuisine}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={`#/restaurant/${r.id}`}>{r.name}</Card.Link>
                </Card.Body>
            </Card>
          ))
        }
      </div>
    )
  } // render()
} // class SearchResults

export default SearchResults
