import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

function Beverages() {
  return (
    <div >
    <h2>Beverages</h2>
    <Container fluid>
    <Row>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Thumsup</Card.Title>
        <Card.Text>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Xtpd7NqH2lA2UEwTbxUOZD3BGA4gdos61A&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>250 ml</Card.Link>
        <Card.Link className='gros2'>19</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Sprite</Card.Title>
        <Card.Text>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2zl2gHelB0C22ycz-X5aAv2sDmdV_bOZ-A&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>600 ml</Card.Link>
        <Card.Link className='gros2'>39</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Limca</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVx3HnO7UuJs-4Swh9f9xVdZ2SGcC7_dp7Iw&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 ltr</Card.Link>
        <Card.Link className='gros2'>49</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Fanta</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTff6D_fdSdZFkwGkPMXGhdNXDPGxFhJOdN2A&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>2.25 ml</Card.Link>
        <Card.Link className='gros2'>99</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Mazza</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZ-xCzb5YtDODbZFdZtdHw0viNYvtKYsfcw&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1.2 ml</Card.Link>
        <Card.Link className='gros2'>69</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Monster</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMGyFtW1p9GPKtMn1m2nbAPW5nna2pNLciw&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>300 ml</Card.Link>
        <Card.Link className='gros2'>119</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
export default Beverages;