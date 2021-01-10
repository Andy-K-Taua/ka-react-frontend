import React from 'react';
import {config} from '../Constants';
import axios from 'axios';

class MenuShowResults extends React.Component {



  componentDidMount(){
    axios.get(`${config.url.API_URL}/:query/menu`, this.props.data.menu_id)
    .then(response => {
      console.log('response', response);
    })
  }

  render(){
    return
    <div>
      <h1>Hello</h1>
    </div>




  } // render

} // class MenuShowResults

export default MenuShowResults;
