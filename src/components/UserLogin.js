import React from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
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
        <h2 className="signupHeading">Login</h2>
          <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={1} className="Email">Email</Form.Label>
                    <Col sm={6}>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={this.handleChangeEmail}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={1} className="Password">Login Password</Form.Label>
                    <Col sm={6}>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={this.handleChangePassword}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={{ span: 10, offset: 1 }}>
                    <Button variant="primary" type="submit" href="/">Login</Button>
                  </Col>
                </Form.Group>
            </Form>
          </div>
      </div>
    ) // return()
  } // render()
} // UserLogin()

export default UserLogin
