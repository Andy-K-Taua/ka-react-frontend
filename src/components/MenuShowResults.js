import React from 'react';
import {config} from '../Constants';
import axios from 'axios';

class MenuShowResults extends React.Component {


  componentDidMount(){
    axios.get(`${config.url.API_URL}/:query/menu`, this.props.data.menu_id)
    .then(response => {
      console.log('response', response);
    })
    .catch(console.warn)
    console.log("Mounted");
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
            this.props.map(r => {
              return (
                <tr key={r.id}>
                  <td>{r.image}</td>
                  <td>{r.menu_item}</td>
                  <td>{r.item_description}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>

    ) // return

  } // render

} // class MenuShowResults

export default MenuShowResults;
