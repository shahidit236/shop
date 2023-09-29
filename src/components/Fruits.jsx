import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

function Fruits() {
  return (
    <div >
    <h2>Fruits</h2>
    <Container fluid>
    <Row>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Apple</Card.Title>
        <Card.Text>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNLlDrZ6t0-9D_MHim-QXLCfeGqAbI54NpA&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 kg</Card.Link>
        <Card.Link className='gros2'>149</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Kiwi</Card.Title>
        <Card.Text>
          <img src='https://media.istockphoto.com/id/834807852/photo/whole-kiwi-fruit-and-half-kiwi-fruit-on-white.jpg?s=612x612&w=0&k=20&c=zliUVnZlYPcOxEDYef7PMmOEEODFr8FUkTYqqFVaRG8=' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 Piece</Card.Link>
        <Card.Link className='gros2'>99</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Mango</Card.Title>
        <Card.Text>
        <img src='https://m.media-amazon.com/images/I/31cXlUcvRVL._AC_UF1000,1000_QL80_.jpg' className='gros1'/>
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
        <Card.Title className='gros'>Grapes</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoA0eJZDxiAPI9Z55ZIAB4hpXTAFOvKV_QQ&usqp=CAU' className='gros1'/>
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
        <Card.Title className='gros'>Orange</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FC4a2s4XcKtZlFv5-VhXxlSWax5tdQGjZg&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 Kg</Card.Link>
        <Card.Link className='gros2'>49</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Banana</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhciMcGUe4AYmOvJAYRrrD3_7AwLYyaZx3g&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 dozen</Card.Link>
        <Card.Link className='gros2'>39</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
export default Fruits;