import LOGO from '../assets/img/LOGO.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import{useContext, useEffect} from 'react';
import {AppContext} from '../app/Provider';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login';

import CarritoIcon from './CarritoIcon';
import { LoginItem } from './LoginItem';


const NavBar = ({CANT}) => {
  const [cant,setCant] = useState(0);
  const{cart,logueado,setIsComponentVisible,isComponentVisible} = useContext(AppContext);
 

  useEffect(() => {
     setCant(cart.length);
  }, [cart]);
  

  const navigate = useNavigate();
  const click= (dir) => {navigate(dir);}


 
  const login = () => {
    setIsComponentVisible(true);
  }
 
  return (
    <>
    <Navbar key='lg' bg="light" expand="lg">
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
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              TODO 3D RAMOS
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={()=>click("/")}>INICIO</Nav.Link>
              <NavDropdown
                title="PRODUCTOS"
                id={`offcanvasNavbarDropdown-expand-lg`}
              >
                <NavDropdown.Item onClick={()=>click("/productos/1")}>Filamento PLA</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>click("/productos/2")}>Filamento ABS</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>click("/productos/3")}>IMPRESORAS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={()=>click("/productos/0")}>CATALOGO</NavDropdown.Item>
              </NavDropdown>
              {logueado.email=="" && <Nav.Link onClick={()=>login()}>LOGIN</Nav.Link>}
              {!(logueado.email=="") && <Nav.Link onClick={()=>click("/ordenes")}>ORDENES</Nav.Link>}
              <div carritoIcon> 
                <CarritoIcon CANT={cant}></CarritoIcon>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>  
    {isComponentVisible&&<Login/>}
    </>
  )
}

export default NavBar;