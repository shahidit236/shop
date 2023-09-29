import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header2() {
  return (
    <div className='header2'>
    <Navbar>
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          
        </Navbar.Collapse>
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-white-example"
              title="Groceries"
              menuVariant="white"
            >
              <NavDropdown.Item href="#">Rice</NavDropdown.Item>
              <NavDropdown.Item href="#">Dal</NavDropdown.Item>
              <NavDropdown.Item href="#">Oil</NavDropdown.Item>
              <NavDropdown.Item href="#">Atta</NavDropdown.Item>
              <NavDropdown.Item href="#">Masala</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-white-example"
              title="Vegetables"
              menuVariant="white"
            >
              <NavDropdown.Item href="#">Tomato</NavDropdown.Item>
              <NavDropdown.Item href="#">Mirchi</NavDropdown.Item>
              <NavDropdown.Item href="#">Onion</NavDropdown.Item>
              <NavDropdown.Item href="#">Potato</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-white-example"
              title="Fruits"
              menuVariant="white"
            >
              <NavDropdown.Item href="#">Apple</NavDropdown.Item>
              <NavDropdown.Item href="#">Mango</NavDropdown.Item>
              <NavDropdown.Item href="#">Pomegranate</NavDropdown.Item>
              <NavDropdown.Item href="#">Banana</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-white"
              title="Beverages"
              menuVariant="white"
            >
              <NavDropdown.Item href="#">Thumsup</NavDropdown.Item>
              <NavDropdown.Item href="#">Sprite</NavDropdown.Item>
              <NavDropdown.Item href="#">Fanta</NavDropdown.Item>
              <NavDropdown.Item href="#">Mazza</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header2;