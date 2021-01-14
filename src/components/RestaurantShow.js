import React from 'react';
import {config} from '../Constants'
import axios from 'axios'
import { GoogleMap, UseJsApiLoader } from '@react-google-maps/api'
import GoogleMaps from './GoogleMaps'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

class RestaurantShow extends React.Component {

  state = {
    restaurant: {},
    menuItems: []
  }

  componentDidMount(){
    axios.get(`${config.url.API_URL}/restaurants/${this.props.match.params.id}`)
    .then( res => {
      console.log('res', res);
      console.log('Mounted');
      this.setState({restaurant: res.data.restaurant, menuItems: res.data.menuItems});
    })
    .catch(console.warn);

  }


  render(){
    return(
      <div>
          {
            this.state.menuItems.map(r => (
              <Card style={{ width: '18rem'}} key={r.id}>
              <Card.Body>
                <Card.Img variant="top" src={r.image} />
                  <Card.Title>{r.name}</Card.Title>
                  <Card.Text>This is a description of the restaurant</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{r.menu_item}</ListGroupItem>
                  <ListGroupItem>{r.item_description}</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
              ))
          }
        <GoogleMaps />
      </div>
    )
  } // render

} // class RestaurantShow

export default RestaurantShow;
