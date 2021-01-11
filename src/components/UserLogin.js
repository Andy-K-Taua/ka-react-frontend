import React from 'react';
import axios from 'axios'
import {config} from '../Constants'

class UserLogin extends React.Component {

  state = {
      userEmail: '',
      userPassword: ''
  }

  handleChangeEmail = (ev) => {
      this.setState(
          {userEmail: ev.target.value}
      );
  }
  handleChangePassword = (ev) => {
      this.setState(
          {userPassword: ev.target.value}
      );
  }

  handleSubmit = (ev) => {
      ev.preventDefault();
      const login = {"auth":{"email": this.state.userEmail, "password": this.state.userPassword}};

      axios.post(`${config.url.API_URL}/user_token`, login)
      .then(function(res){
        console.log(res);
        localStorage.setItem("jwtToken", "Bearer "+ res.data.jwt);
        axios.defaults.headers.common["Authorization"]=localStorage.getItem("jwtToken");

      })
      .catch(function(err){
        console.warn(err);
      });
  }
  render(){
      return(
          <div>
              <hr />
              <h2>Login</h2>
              <div>

              <form onSubmit={this.handleSubmit}>
                  <label className="Email">Email
                   <input type="text" onChange={this.handleChangeEmail}/>
                  </label>
                  <label className="Password">Login Password
                   <input type="password" onChange={this.handleChangePassword}/>
                  </label>
                  <button>Login</button>
                  <br />

              </form>



              </div>
          </div>

      ) // return()
  } // render()
} // UserLogin()

export default UserLogin
