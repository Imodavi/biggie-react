import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1>Welcome to My App</h1>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is a card.</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is another card.</Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is yet another card.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default App;
