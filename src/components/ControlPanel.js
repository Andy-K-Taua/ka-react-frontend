import React from 'react'
import {config} from '../Constants'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


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
      <div>
        <h2>Welcome Back {this.state.user.name}!</h2>

        <h3>Your restaurants:</h3>

        {
          this.state.restaurants.length > 0
          &&
          <Accordion>
            {
              this.state.restaurants.map((item, i) => {
                return(
                  <Card className="accordianContainer" key={item.id}>
                    <Accordion.Toggle as={Card.Header} eventKey={i.toString()}>
                      <span className="accordianSpacing"><strong>{item.name}</strong></span><span className="accordianSpacing"><em>{item.cuisine}</em></span><Button variant="outline-primary" size="sm" className="buttonSpacing">Edit</Button><Button variant="outline-danger" size="sm" className="buttonSpacing">Delete</Button>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={i.toString()}>
                      <Card.Body>
                        {
                          item.menus.map(menu => {
                            return(
                              <div key={menu.id} className="itemContainer">
                                <div className="textContainer">
                                  <span className="accordianSpacing menuIndent"><strong>{menu.menu_item}</strong></span>
                                  <span className="accordianSpacing descriptionWrap">{menu.item_description}</span>
                                </div>
                                <div className="buttonContainer">
                                  <Button variant="outline-primary" size="sm" className="buttonSpacing">Edit</Button>
                                  <Button variant="outline-danger" size="sm" className="buttonSpacing">Delete</Button>
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
