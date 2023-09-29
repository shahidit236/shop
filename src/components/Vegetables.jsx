import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

function Vegetables() {
  return (
    <div >
    <h2>Vegetables</h2>
    <Container fluid>
    <Row>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Tomato</Card.Title>
        <Card.Text>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzJBIsyunnIR47N4720sY0LDO9J3IvsNX7Q&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 kg</Card.Link>
        <Card.Link className='gros2'>49</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Mirchi</Card.Title>
        <Card.Text>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6AZOPdLpV3AwfBwQ1i6RPbcN2qJMQIytOw&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 kg</Card.Link>
        <Card.Link className='gros2'>59</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Potato</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fd3dfaH5F-rIOH_10RShpZb50PAHCnAbsw&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 kg</Card.Link>
        <Card.Link className='gros2'>39</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Carrot</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKMucrHuFjB0WrOZbDAiScqftJKtrlqPNyQ&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 kg</Card.Link>
        <Card.Link className='gros2'>69</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Brinjal</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS2l-IEsGF_MKHFFG-4BAQGxHF90ELZT1iiA&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 Kg</Card.Link>
        <Card.Link className='gros2'>29</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Beetroot</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMA1KLH2deErEAx281gNgyJg3cf-hiXvzrA&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 Kg</Card.Link>
        <Card.Link className='gros2'>59</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
export default Vegetables;