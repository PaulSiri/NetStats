import React from 'react';
import './Theme.scss';
import './Classes.scss';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { GiBasketballBasket, GiSoccerField } from 'react-icons/gi';

function App() {
  return (
    <div>
      <Row noGutters="true">
        <Col>
          <Navbar id="main-nav" bg="primary" expand="lg">
            <Navbar.Brand href="#home">NetStats</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavDropdown title="NBA Teams">

                </NavDropdown>
                <NavDropdown title="MLS Teams">

                </NavDropdown>
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Container fluid>
        <Row>
          <Col className="center">
            <h1>Choose a Sport/League for Stats!</h1>
          </Col>
        </Row>
        <Row justify-content-center>
          <Col xs={6} className="center">
            <h1>NBA</h1>
            <IconContext.Provider value={{ size: "20vmax", className: "main-icon" }}>
              <div>
                <GiBasketballBasket></GiBasketballBasket>
              </div>
            </IconContext.Provider>
          </Col>
          <Col xs={6} className="center">
            <h1>MLS</h1>
            <IconContext.Provider value={{ size: "20vmax", className: "main-icon" }}>
              <div>
                <GiSoccerField></GiSoccerField>
              </div>
            </IconContext.Provider>
          </Col>
        </Row>
        <Row>
          <Col id="main-search" xs={12} className="center">
          <h3>Or Search Here</h3>
            <Form inline className="inline">
              <FormControl type="text" placeholder="Look Up Player or Statistic" className="mr-sm-2" />
              <Button variant="secondary">Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
