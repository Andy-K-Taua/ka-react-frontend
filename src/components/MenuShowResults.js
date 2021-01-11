import React from 'react';
import {config} from '../Constants';
import axios from 'axios';
import {Route, Link, HashRouter as Router} from 'react-router-dom'

class MenuShowResults extends React.Component {

  state = {
    image: '',
    menu_item: '',
    item_description: ''
  }


  componentDidMount(){
    axios.get(`${config.url.API_URL}/menus/:query/menu`, {image: this.state.image, menu_item: this.state.menu_item, item_description: this.state.item_description})
    .then( response => {
      console.log('response:', response);
    })
    .catch(console.warn);
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
                    <td><Link to={`/results/${this.props.match.params.query}/${r.menu_id}`}>{r.menu_id}</Link></td>
                    </tr>
                    );
                    <Route exact path="/results/:query/menu" component={MenuShowResults}></Route>
            })
          }
        </tbody>
      </table>
    </div>
    )



  } // render

} // class MenuShowResults

export default MenuShowResults;
