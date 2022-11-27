import './Navbar.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import Login from '../loginForm/Login';

function Navbars() {

  const navigate = useNavigate();
  const user = localStorage.getItem('token')
  console.log(user)
  const logOut = async () => {
    localStorage.clear();
    navigate('/login')
  }
  return (
    <>
      <div className='nav'>
        <Navbar bg="dark" variant="dark" className='navbar' >

          {/* <Navbar.Brand href="#home">MICRO-COMM</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features"></Nav.Link>
            <Nav.Link href="#pricing"></Nav.Link> */}
            </Nav>
            <Nav>
              {
                localStorage.getItem('token') ?
                  <>
                    <h3 style={{ color: "white" }}>Welcome to : </h3>
                  </>
                  :
                  <>
                    <Nav.Link><Link to="/register">Sign Up</Link></Nav.Link>
                    <Nav.Link><Link to="/login">Login</Link></Nav.Link>
                  </>
              }
              </Nav>
              {localStorage.getItem('token') ?
              <Nav>
              <NavDropdown title="Sanjeev kushwaha">
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
              </Nav>
              :null
            }
          </Navbar.Collapse>
        </Navbar>

      </div>
    </>
  );
}

export default Navbars;
