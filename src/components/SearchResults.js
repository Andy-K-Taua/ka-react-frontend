import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import {Route, Link, HashRouter as Router} from 'react-router-dom'
import RestaurantShow from './RestaurantShow';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import GoogleMaps from './GoogleMaps'
import GoogleMapReact from 'google-map-react';
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"



class SearchResults extends React.Component {

  state = {
    search: [],
  }

  componentDidMount(){
    //TODO: use react router in KraveApp to do all route authentication
    //https://reactrouter.com/native/example/auth-workflow
    // for now we are just check the localstorage token to test if the user is logged in , not best practice because we have to do this check in every single component.
    const authHeader = localStorage.getItem("jwtToken");
    console.log('authHeader', authHeader);
    if( authHeader === "null" ) {
      //TODO: pass query string param to route so that you can show a message in the login component to explain to the user why they were redirected there.
      console.log('got here', this.props);
      this.props.history.push("/login");
      return; //prevent the axios request below from happening
    }
    axios.get(`${config.url.API_URL}/search`, {params: {search: this.props.match.params.query}})
    .then(response => {
      this.setState({search: response.data});
      console.log('Response', response);
    })
    .catch(error => {
      console.warn(error);
    });
  } // componentDidMount

  render() {
    return(
      <div>
        <div className="displayMenus">
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
        <GoogleMaps />
      </div>
    )
  } // render()
} // class SearchResults

export default SearchResults
