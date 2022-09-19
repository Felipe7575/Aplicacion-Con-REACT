import {Outlet} from 'react-router-dom';
import React from 'react'
import NavBar  from '../components/NavBar';
import CarritoIcon from '../components/CarritoIcon';
import Provider from './Provider';


 const Layout = () => {

  return (
    <div className="container-general">
        <NavBar>
            <CarritoIcon/>
        </NavBar>
        <Provider>
          
          <Outlet/>
        </Provider>
    </div>
  )
}

export default Layout;
