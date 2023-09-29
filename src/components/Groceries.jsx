import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';

function Groceries() {
  return (
    <div >
    <h2>Groceries</h2>
    <Container fluid>
    <Row>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Rice</Card.Title>
        <Card.Text>
         <img src='https://img.freepik.com/free-photo/closeup-white-rice-textured_53876-30443.jpg' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>10 kg</Card.Link>
        <Card.Link className='gros2'>499</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Dal</Card.Title>
        <Card.Text>
          <img src='https://grocimart.com/files/images/loose-toor-arhar-dal_15904091400.jpg' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 kg</Card.Link>
        <Card.Link className='gros2'>99</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Oil</Card.Title>
        <Card.Text>
        <img src='https://png.pngitem.com/pimgs/s/56-564835_cooking-oil-golden-oil-hd-png-download.png' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 ltr</Card.Link>
        <Card.Link className='gros2'>149</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Atta</Card.Title>
        <Card.Text>
        <img src='https://kumaribasket.com/wp-content/uploads/2020/09/Aashirvaad-Select-Premium.jpg' className='gros1'/>
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
        <Card.Title className='gros'>Masala</Card.Title>
        <Card.Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMtnubw-j-TcnMazSe-exJXPI0-ZgenaPGg&usqp=CAU' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>250 gms</Card.Link>
        <Card.Link className='gros2'>89</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '10rem' }}>
      <Card.Body>
        <Card.Title className='gros'>Egg</Card.Title>
        <Card.Text>
        <img src='https://www.pngitem.com/pimgs/m/333-3334985_chicken-egg-no-egg-white-egg-png-transparent.png' className='gros1'/>
        </Card.Text>
        <Card.Link className='gros2'>1 dozen</Card.Link>
        <Card.Link className='gros2'>69</Card.Link>
        <Button variant="primary" className='gros3'>ADD</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
export default Groceries;