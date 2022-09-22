import {Outlet} from 'react-router-dom';
import React from 'react'
import NavBar  from '../components/NavBar';
import Provider from './Provider';


 const Layout = () => {

  return (
    <div className="container-general">
        <Provider>
          <NavBar> </NavBar>
          <Outlet/>
        </Provider>
    </div>
  )
}

export default Layout;
