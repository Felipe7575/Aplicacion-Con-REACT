import {Outlet} from 'react-router-dom';
import React from 'react'
import NavBar  from '../components/NavBar';

import ProviderCarrito from './Provider';



 const Layout = () => {

  return (
    <div className="container-general">
        <ProviderCarrito>
          <NavBar> </NavBar>
          <Outlet className="container-general"/>
        </ProviderCarrito>
    </div>
  )
}

export default Layout;
