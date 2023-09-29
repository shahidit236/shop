import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import  {PiShoppingCartSimpleBold } from 'react-icons/pi'
import {AiOutlineUser} from 'react-icons/ai'
import logo from '../assets/swifto 3.png'

function Header() {
  return (
    <div className='header sticky-top' >
    <Navbar expand="lg" className="bg-body-black">
      <Container fluid>
        <Navbar.Brand href="#">
        <img src={logo} alt='logo' className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
          <Form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search for products " aria-label="Search"/>
    </Form>
    <div className='bold1'>
   < AiOutlineUser size="20px"/>
   </div>
    <a href="#" className='login'> Login </a>
    <div className='bold'>
   < PiShoppingCartSimpleBold size="20px"/>
   </div>
    <a href='#' className='cart'>Cart</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;