import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import groceries from '../assets/groceries.png'
import veg from '../assets/veg.png'
import beverages from '../assets/beverages.png'
import fruit from '../assets/fruit.png'
import './Products.css'

function Products() {
  return (
    <div className='1'>
    <h3 className='categories'>Categories</h3>
    <Container>
      <Row>
        <Col>
        <Card>
      <Card.Body>
        <Card.Text>
        <img src={groceries} alt='groceries' className='groceries'/>
        </Card.Text>
        <Card.Link href="#" className='groceries1'>Groceries</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card>
      <Card.Body>
        <Card.Text> 
        <img src={veg} alt='logo' className='veg'/>
        </Card.Text>
        <Card.Link href="#" className='veg1'>Vegetables</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card>
      <Card.Body>
        <Card.Text>
          <img src={fruit} alt='fruit' className='fruit'/>
        </Card.Text>
        <Card.Link href="#" className='fruit1'>Fruits</Card.Link>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card>
      <Card.Body>
        <Card.Text>
         <img src={beverages} alt='beverages' className='beverages'/>
        </Card.Text>
        <Card.Link href="#" className='beverages1'>Beverages</Card.Link>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Products;