import React from 'react';
import {config} from '../Constants'
import axios from 'axios'
import Popup from './Popup';

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

  togglePopup() {
    console.log("word clicked");
  this.setState({showPopup: !this.state.showPopup});
}

  render(){
    return(
      <div>
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

                    <td onClick={this.togglePopup.bind(this)}>{r.menu_item}</td>

                    <td>{r.item_description}</td>
                  </tr>
                    );
              })
            }
          </tbody>
        </table>
      </div>
    )
  } // render

} // class RestaurantShow

export default RestaurantShow;
