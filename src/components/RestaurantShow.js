import React from 'react';
import MenuShowResults from './MenuShowResults';
import axios from 'axios'

class RestaurantShow extends React.Component {

  handleClick = (ev) => {
    console.log(ev);
  }


  render(){
    return(
      <div>
        <h1>Your Restaurant</h1>

      </div>
    )
  } // render




} // class RestaurantShow

export default RestaurantShow;
