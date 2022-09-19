
import LOGO from '../assets/img/LOGO.png'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const NavBar = ({CANT , children}) => {
  return (
    <Navbar className="navbarDiv" bg="light" expand="lg">
      <Container fluid>
        <Link to="/" className='navBarBrand'> <img src={LOGO} style={{height: 50, width: 50}} alt="LOGO DE 3D RAMOS" ></img> TODO 3D RAMOS  </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="navbarLink" to="/">INICIO</Link>
            <NavDropdown className="navbarDropDown"  title="PRODUCTOS" id="navbarScrollingDropdown">
            
              <Link className="navbarDropDown-item" to="/productos/1">Filamento PLA</Link> 
              <Link className="navbarDropDown-item" to="/productos/2">Filamento ABS</Link> 
              <Link className="navbarDropDown-item" to="/productos/3">Impresoras 3D</Link>  

               <NavDropdown.Divider />
              <Link className="navbarDropDown-item" to="/productos/0">CATALOGO</Link> 

            </NavDropdown> 

            <Link className="navbarLink" to="/contact">CONTACTO</Link>   
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
          {children}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  
   
  )
}

export default NavBar;