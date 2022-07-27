import React from 'react';
import './dashboard.css';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';

function Dashboard() {
  return (
    <>
    <div className='dashboard' style={{height: "10vh",width:"20%"}}>
      Dashboard
    </div>
    <div className='card'>
    <Row>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>
      </Row>
   

      <Row>
        <Col xs={6}>
        
        </Col>
        <Col xs={6}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
        </Col>
      </Row>
    </div>
    
    </>
  )
}

export default Dashboard