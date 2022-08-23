import '../styles/styles.css'
import LOGO from '../assets/img/LOGO.png'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
  return (
    // <div className='navb' style={{height:150 ,width: "100vw", backgroundColor: "#FD876"}}>

    //     <img src={LOGO} style={{height: 100, width: 100}} alt="LOGO DE 3D RAMOS"/>
    //     <a href="./index.html" className='boton'> INICIO </a>
    //     <a href="./index.html" className='boton'> PRODUCTOS </a>
    //     <a href="./index.html" className='boton'> NOSOTROS </a>
    // </div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={LOGO} style={{height: 50, width: 50}}></img> TODO 3D RAMOS </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">INICIO</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action5">Impresoras</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Filamentos</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="#action3">CATALOGO</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link href="#action1">CONTACTO</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">BUSCAR</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar;