import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Clock from './Clock';
import MaterialIcon from 'material-icons-react';
import './bookstore.css';

class Navigation extends React.Component {
  render() {
    return (
	<Navbar inverse collapseOnSelect>
	  <Navbar.Header>
	    <Navbar.Brand>
        <MaterialIcon icon="dashboard" color='#ffffff'/>
	      <Link to={`/`} className="navbarmb">The Store</Link>
	    </Navbar.Brand>
	    <Navbar.Toggle />
	  </Navbar.Header>
	  <Navbar.Collapse>
	    <Nav pullRight>
        <Nav>
	        <NavDropdown eventKey={3} title="Language" id="basic-nav-dropdown">
	          <MenuItem eventKey={3.1}>Español</MenuItem>
	          <MenuItem eventKey={3.2}>English</MenuItem>
	          <MenuItem eventKey={3.3}>Deutsch</MenuItem>
	          <MenuItem divider />
	          <MenuItem eventKey={3.3}>Others</MenuItem>
	        </NavDropdown>
	      </Nav>
	      <NavItem eventKey={2} href="#">
          Log in
	      </NavItem>
        <NavItem>
          <Clock/>
        </NavItem>
	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
    );
  }
}

export default Navigation;

