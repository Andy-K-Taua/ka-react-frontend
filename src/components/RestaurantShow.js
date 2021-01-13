import React from 'react';
import {config} from '../Constants'
import axios from 'axios'
import { GoogleMap, UseJsApiLoader } from '@react-google-maps/api'
import GoogleMaps from './GoogleMaps'
<<<<<<< HEAD
import Popup from './Popup';
=======
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
>>>>>>> 35e4e03c302c8034a757613a496ce13429bdfd07

class RestaurantShow extends React.Component {

  state = {
    restaurant: {},
    menuItems: [],
    showPopup: false

  }

  componentDidMount(){
    axios.get(`${config.url.API_URL}/restaurants/${this.props.match.params.id}`)
    .then( res => {
      console.log('res', res);
      this.setState({restaurant: res.data.restaurant, menuItems: res.data.menuItems});
    })
    .catch(console.warn);

  }

  togglePopup = () => {
  this.setState({showPopup: !this.state.showPopup});
}

  render(){
    return(
      <div>
<<<<<<< HEAD
        {this.state.showPopup ?
          <Popup text="Nutrtion" closePopup={this.togglePopup}/>
          : null
        }
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Item</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.menuItems.map(r => {
                return (
                  <tr key={r.id}>
                    <td><img src={r.image} alt=""></img></td>
                    <td onClick={this.togglePopup}>{r.menu_item}</td>
                    <td>{r.item_description}</td>
                  </tr>
                    );
              })
            }
          </tbody>
        </table>
=======
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
>>>>>>> 35e4e03c302c8034a757613a496ce13429bdfd07
        <GoogleMaps />
      </div>
    )
  } // render

} // class RestaurantShow

export default RestaurantShow;
