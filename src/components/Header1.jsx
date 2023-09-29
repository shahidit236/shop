import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import logo1 from '../assets/delivery2.png'

function Header1() {
  return (
    <div className='header1'>
    <Navbar expand="lg" className="bg-body-black">
      <Container fluid>
        <Navbar.Brand href="#">
        <img src={logo1} alt='logo' className='logo1'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>
    </div>
  );
}

export default Header1;