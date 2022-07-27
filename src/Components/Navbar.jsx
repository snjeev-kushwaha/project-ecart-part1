import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Routes, Route} from 'react-router-dom';
import Login from '../loginForm/Login';
// import {Link} from 'react-router-dom';
function CollapsibleExample() {
  return (
    <>
    <Navbar bg="dark" variant="dark" className='navbar'>
     
        <Navbar.Brand href="#home">MICRO-COM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link><Link to="login">Login</Link></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign Up
            </Nav.Link>
            <Nav.Link href="#deets"><i class="bi bi-person-circle"></i></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Routes>
      <Route path = "/login" element= {<Login />} />
    </Routes>

    </>
  );
}

export default CollapsibleExample;
