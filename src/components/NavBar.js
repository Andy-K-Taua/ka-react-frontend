import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class NavBar extends React.Component {

  handleLogout(){
    localStorage.setItem("jwtToken", null);
    axios.defaults.headers.common["Authorization"]=null;
  }

  render(){
    return(
      <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Krave</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="navbar">
          <Nav className="mr-auto">
              <NavDropdown title="Restaurants" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/restaurants/signup">Sign Up</NavDropdown.Item>
              </NavDropdown>
                <NavDropdown title="User" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#/signup">Sign Up</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#/login">Login</NavDropdown.Item>
                  <NavDropdown.Item onClick={this.handleLogout} href="/">Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              </div>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )

  }

} // class NavBar

export default NavBar;
