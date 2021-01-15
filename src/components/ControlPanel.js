import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import EditMenu from './CpModalEdit'
import DeleteMenu from './CpModalDelete'

class ControlPanel extends React.Component {

  state = {
    user: {},
    restaurants: []
  }

  componentDidMount() {
    axios.get(`${config.url.API_URL}/control`)
    .then(response => {
      console.log(response);
      this.setState({user: response.data, restaurants: response.data.restaurants});
    })
    .catch(error => {
      console.warn(error);
    })
  }

  render() {
    return(
      <div className="controlPanel">
        <h2>Welcome back {this.state.user.name}!</h2>

        <h4>Your restaurants:</h4>

        {
          this.state.restaurants.length > 0
          &&
          <Accordion>
            {
              this.state.restaurants.map((item, i) => {
                return(
                  <Card className="accordianContainer" key={item.id}>
                    <Accordion.Toggle as={Card.Header} eventKey={i.toString()}>
                      <div className="headingContainer">
                        <div className="headingText">
                          <span className="accordianSpacing"><strong>{item.name}</strong></span>
                          <span className="accordianSpacing"><em>{item.cuisine}</em></span>
                        </div>
                        <div className="headingButtons">
                          <Button variant="outline-primary" size="sm" className="buttonSpacing">Edit</Button>
                          <Button variant="outline-danger" size="sm" className="buttonSpacing">Delete</Button>
                        </div>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i.toString()}>
                      <Card.Body>
                        {
                          item.menus.map(menu => {
                            return(
                              <div key={menu.id} className="itemContainer">
                                <div className="textContainer">
                                  <span className="accordianSpacing menuIndent"><strong>{menu.menu_item}</strong></span>
                                  <span className="accordianSpacing">{menu.item_description}</span>
                                </div>
                                <div className="buttonContainer">
                                  <EditMenu menu={menu} />
                                  <DeleteMenu menu={menu} />
                                </div><br />
                              </div>
                            );
                          })
                        }
                        <br />
                        <Button variant="primary" size="sm" className="addButton">Add Menu Item</Button>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                );
              })
            }
            <Button variant="primary" className="addButton">Add Restaurant</Button>
          </Accordion>
        }
      </div>
    )
  } // render()
} // class ControlPanel

export default ControlPanel
