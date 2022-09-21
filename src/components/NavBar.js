import LOGO from '../assets/img/LOGO.png'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

import{useContext, useEffect} from 'react';
import {AppContext} from '../app/Provider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CarritoIcon from './CarritoIcon';


const NavBar = ({CANT}) => {
  const [cant,setCant] = useState(0);
  const{cart} = useContext(AppContext);
 

  useEffect(() => {
     setCant(cart.length);
  }, [cart]);

  const navigate = useNavigate();
  const click= (dir) => {navigate(dir);}

  return (
    <Navbar key='md' bg="light" expand="md" className="mb-3">
      <Container fluid className='containerNavBar'>
        <Navbar.Brand onClick={()=>click("/")} className="navBarBrand">
            <img
              alt=""
              src={LOGO}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <p>TODO 3D RAMOS</p>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              TODO 3D RAMOS
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={()=>click("/")}>INICIO</Nav.Link>
              <Nav.Link onClick={()=>click("/contact")}>CONTACTOS</Nav.Link>
              <NavDropdown
                title="PRODUCTOS"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item onClick={()=>click("/productos/1")}>Filamento PLA</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>click("/productos/2")}>Filamento ABS</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>click("/productos/3")}>IMPRESORAS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>click("/productos/0")}>CATALOGO</NavDropdown.Item>
              </NavDropdown>
              <div carritoIcon> 
                <CarritoIcon CANT={cant}></CarritoIcon>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>  
  )
}

export default NavBar;