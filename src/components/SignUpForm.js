import React from 'react'
import axios from 'axios'
import {config} from '../Constants'
import Form from 'react-bootstrap/Form';
// import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class SignUpForm extends React.Component {

    state = {
        authorisation: '',
        name: '',
        email: '',
        password: '',
        password_confirmation:''
    }

    handleChangeType = (ev) => {
         if (ev.target.value==="Customer"){
           this.setState({authorisation: 2});
         }else if (ev.target.value==="Restaurant Owner"){
           this.setState({authorisation: 1});
         }
    }

    handleUseNamChangeType = (ev) => {
        this.setState(
            {name: ev.target.value}
        );
    }
    handleUseEmaChangeType = (ev) => {
        this.setState(
            {email: ev.target.value}
        );
    }
    handlePassConChangeType = (ev) => {
        this.setState(
            {password_confirmation: ev.target.value}
        );
    }
    handlePassChangeType = (ev) => {
        this.setState(
            {password: ev.target.value}
        );
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const params={user: {name:this.state.name, email: this.state.email, password: this.state.password, password_confirmation: this.state.password_confirmation, authorisation: 2}};
        axios.post(`${config.url.API_URL}/users`, params)
        .then(res => console.log('res:', res))
        .catch(console.warn)
      }

    render(){
        return(
          <div>
            <div>
              <h2 className="signupHeading">Sign Up Here</h2>
                <Form onSubmit={this.handleSubmit}>
                    <div className="formLayout">
                    <Form.Group as={Row} controlId="formHorizontalSelect">
                      <Form.Label  column sm={2} className="dropDown">Restaurant Owner or Customer?</Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            as="select"
                            value={this.state.userType} onChange={this.handleChangeType}>
                            <option>Select</option>
                            <option>Restaurant Owner</option>
                            <option>Customer</option>
                          </Form.Control>
                          </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalName">
                      <Form.Label column sm={2}>User Name</Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="name"
                            placeholder="Enter you name"
                            onChange={this.handleUseNamChangeType} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                      <Form.Label column sm={2}>User Email</Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            onChange={this.handleUseEmaChangeType} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicPassword">
                      <Form.Label column sm={2}>Enter password</Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="password"
                            placeholder="Enter new password"
                            onChange={this.handlePassChangeType} />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formBasicConfPassword">
                      <Form.Label column sm={2}>Confirm password</Form.Label>
                        <Col sm={5}>
                          <Form.Control
                            type="password"
                            placeholder="confirm password"
                            onChange={this.handlePassConChangeType} />
                      </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Button variant="primary" type="submit">Create Account</Button>
                    </Col>
                  </Form.Group>
                </div>
            </Form>
          </div>
        </div>
      ) // return
  } // render
} // classSignUpForm

export default SignUpForm
