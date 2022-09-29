import {Outlet} from 'react-router-dom';
import React from 'react'
import NavBar  from '../components/NavBar';
import Footer from '../components/Footer';
import ProviderCarrito from './Provider';



 const Layout = () => {

  return (
   
        <ProviderCarrito>
          <NavBar> </NavBar>
          <Outlet className="container-general"/>
          <Footer></Footer>
        </ProviderCarrito>

  )
}

export default Layout;
