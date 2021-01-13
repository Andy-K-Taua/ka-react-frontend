import React from 'react'
import {config} from '../Constants'
import axios from 'axios'

class ControlPanel extends React.Component {

  state = {
    user: {}
  }

  componentDidMount() {
    axios.get(`${config.url.API_URL}/control`)
    .then(response => {
      console.log(response);
      this.setState({user: response.data});
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
      </div>
    )
  } // render()
} // class ControlPanel

export default ControlPanel
