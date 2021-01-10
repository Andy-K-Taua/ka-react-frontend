import React from 'react';
// import axios from 'axios'

class UserLogin extends React.Component {

  state = {
      userName: '',
      userEmail: '',
      userPassword: ''
  }

  handleChangeType = (ev) => {
      this.setState(
          {userType: ev.target.value}
      );
  }

  handleSubmit = (ev) => {
      ev.preventDefault();

  }
  render(){
      return(
          <div>
              <hr />
              <h2>Login</h2>
              <div>

              <form onSubmit={this.handleSubmit}>
                  <label className="Login">Login</label>

                  <br />


              </form>
              </div>
          </div>

      ) // return
  } // render
} // UserLogin()

export default UserLogin
